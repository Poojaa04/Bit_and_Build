document.addEventListener('DOMContentLoaded', function () {
    // Sample data (replace with your leaderboard data)
    const leaderboardData = [
        { name: 'Player 1', score: 100 },
        { name: 'Player 2', score: 80 },
        { name: 'Player 3', score: 120 },
        // Add more entries as needed
    ];

    const leaderboardList = document.getElementById('leaderboard-list');

    // Sort the leaderboard data by score in descending order
    leaderboardData.sort((a, b) => b.score - a.score);

    // Populate the leaderboard list
    leaderboardData.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${index + 1}. ${entry.name}</span><strong>${entry.score} points</strong>`;
        leaderboardList.appendChild(listItem);
    });
});
