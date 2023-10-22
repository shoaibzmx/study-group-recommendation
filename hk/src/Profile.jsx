import React, { useState } from 'react';
import "./P"
import profileImage from './images/profile_image.png';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Profile() {
  const [name, setName] = useState("Full Name (or Username/Nickname)");
  const [bio, setbio] = useState("Enter your bio here.");
  const [institution, setInstitution] = useState("Institution Name");
  const [yearLevel, setYearLevel] = useState("Sophomore");
  const [subjectsOfInterest, setSubjectsOfInterest] = useState("Math, Physics, History");
  const [studyMethods, setStudyMethods] = useState("Flashcards, Summarization");
  const [studyTime, setStudyTime] = useState("Evening");
  const [groupStudyRole, setGroupStudyRole] = useState("Organizer");
  const [badges, setBadges] = useState("Problem Solver, Consistent Learner");
  const [skills, setSkills] = useState("Mathematics, Physics");
  const [status, setStatus] = useState("Online");
  const [studyMode, setStudyMode] = useState("Currently Studying Biology");
  const [recentActivity, setRecentActivity] = useState("Joined a Math challenge, Shared Physics notes");
  const [hoursStudied, setHoursStudied] = useState("150");
  const [challengesCompleted, setChallengesCompleted] = useState("10");
  const [connectionRequested, setConnectionRequested] = useState(false);


  // Modal control states
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalField, setModalField] = useState(""); 
  const [tempValue, setTempValue] = useState(""); 

  const openModal = (field, value) => {
    setModalField(field);
    setTempValue(value);
    setModalOpen(true);
  };

  const handleSave = () => {
    switch (modalField) {
      case 'name': setName(tempValue); break;
      case 'bio': setbio(tempValue); break;
      case 'institution': setInstitution(tempValue); break;
      case 'yearLevel': setYearLevel(tempValue); break;
      case 'subjectsOfInterest': setSubjectsOfInterest(tempValue); break;
      case 'studyMethods': setStudyMethods(tempValue); break;
      case 'studyTime': setStudyTime(tempValue); break;
      case 'groupStudyRole': setGroupStudyRole(tempValue); break;
      case 'badges': setBadges(tempValue); break;
      case 'skills': setSkills(tempValue); break;
      case 'status': setStatus(tempValue); break;
      case 'studyMode': setStudyMode(tempValue); break;
      case 'recentActivity': setRecentActivity(tempValue); break;
      case 'hoursStudied': setHoursStudied(tempValue); break;
      case 'challengesCompleted': setChallengesCompleted(tempValue); break;
      default: break;
    }
    setModalOpen(false);
  };

  const toggleConnectionRequest = () => {
    setConnectionRequested(!connectionRequested);
  };

  return (
    <div className="App">
      <div className="UserProfile">

        {/* ... other sections ... */}

        {/* Basic Information */}
        <div className="BasicInfo">
          <img src={profileImage} alt="User's Profile" />
          <div>
            <h1 onClick={() => openModal('name', name)}>{name}</h1>
            {/* ... */}
          </div>
          <div className="UserActions">
            <button onClick={toggleConnectionRequest}>
                {connectionRequested ? "Cancel Request" : "Send Connection Request"}
            </button>
            <button>Direct Message</button>
        </div>
        </div>

        {/* Study Preferences */}
        <div className="StudyPreferences">
            <p onClick={() => openModal('institution', institution)}>Institution: {institution}</p>
            <p onClick={() => openModal('subjectsOfInterest', subjectsOfInterest)}>Interest: {subjectsOfInterest}</p>
            <p onClick={() => openModal('groupStudyRole', groupStudyRole)}>Goal: {groupStudyRole}</p>
        </div>

        {/* Achievements and Skills */}
        <div className="AchievementsSkills">
            <p onClick={() => openModal('badges', badges)}>Badges: {badges}</p>
            <p onClick={() => openModal('skills', skills)}>Tutoring Skills: {skills}</p>
        </div>

        {/* Availability Status */}
        <div className="Availability">
            <p onClick={() => openModal('status', status)}>Status: {status}</p>
            <p onClick={() => openModal('studyMode', studyMode)}>Study Mode: {studyMode}</p>
        </div>

        {/* Personal Notes or Bio */}
        <div className="Bio" onClick={() => openModal('bio', bio)}>
            <p>{bio}</p>
        </div>

        {/* Activity Timeline */}
        <div className="ActivityTimeline">
            <p onClick={() => openModal('recentActivity', recentActivity)}>Recent Activity: {recentActivity}</p>
        </div>

        {/* Personal Study Stats */}
        <div className="StudyStats">
            <p onClick={() => openModal('hoursStudied', hoursStudied)}>Total Hours Studied: {hoursStudied}</p>
            <p onClick={() => openModal('challengesCompleted', challengesCompleted)}>Challenges Completed: {challengesCompleted}</p>
        </div>
        <Modal 
          isOpen={isModalOpen} 
          onRequestClose={() => setModalOpen(false)}
          className="customModal"
          overlayClassName="customOverlay"
        >
          <textarea value={tempValue} onChange={(e) => setTempValue(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setModalOpen(false)}>Cancel</button>
        </Modal>

      </div>
    </div>
  );
}

export default Profile;