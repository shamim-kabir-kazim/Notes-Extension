document.addEventListener('DOMContentLoaded', function() {
  const saveButton = document.getElementById('saveButton');
  const note = document.getElementById('note');

  // Load saved note
  chrome.storage.sync.get(['note'], function(result) {
    note.value = result.note || '';
  });

  // Save note
  saveButton.addEventListener('click', function() {
    chrome.storage.sync.set({ note: note.value }, function() {
      console.log('Note saved.');
    });
  });
});
