import React from 'react';
import './AccountPage.css'; // Import the CSS file for the component

const AccountPage = () => {
  const avatarUrl = 'https://example.com/avatar.jpg'; // Replace with the actual URL of the user's avatar
  const username = 'JohnDoe'; // Replace with the actual username

  // Sample data for game records
  const gameRecords = [
    { game: 'Game 1', played: 3 },
    { game: 'Game 2', played: 5 },
    { game: 'Game 3', played: 2 },
  ];

  return (
    <div className="account-page-container">
      <div className="avatar-container">
        <img src={avatarUrl} alt="User Avatar" className="avatar-image" />
        <h2 className="username">{username}</h2>
      </div>
      <div className="game-records-container">
        <h3>Game Records</h3>
        <table className="game-records-table">
          <thead>
            <tr>
              <th>Game</th>
              <th>Played</th>
            </tr>
          </thead>
          <tbody>
            {gameRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.game}</td>
                <td>{record.played}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountPage;
