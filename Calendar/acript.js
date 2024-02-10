document.addEventListener('DOMContentLoaded', function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    events: [
      {
        title: 'Event 1',
        start: '2024-02-10',
        end: '2024-02-12'
      },
      {
        title: 'Event 2',
        start: '2024-02-15T12:00:00',
        end: '2024-02-15T14:00:00'
      },
      // Add more events as needed
    ]
  });
});
