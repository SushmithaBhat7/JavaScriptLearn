import { useState } from "react";

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import TransgenderIcon from "@mui/icons-material/Transgender";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const FormComponent = () => {
  const [familyHistory, setFamilyHistory] = useState({
    parents: false,
    siblings: false,
  });
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("lazy");
  const [heightWeight, setHeightWeight] = useState({
    heightFt: "0",
    heightInch: "00",
    weightLbs: "000",
  });

  const handleChange = (e) => {
    setGender(e.target.value);
  };
  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };
  const handleHeightWeightChange = (e) => {
    const { name, value } = e.target;
    setHeightWeight({ ...heightWeight, [name]: value });
  };
  const handleClickgender = (e) => {
    setGender(e.target.id);
  };

  const handleChangeFamilyHistory = (e) => {
    const { checked, name } = e.target;
    setFamilyHistory({ ...familyHistory, [name]: checked });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <form className="flex flex-col justify-center items-center w-full">
        <div className="form-parent">
          <div className="form-content">
            <label className="familyLabel">Family History :</label>
          </div>
          <div className="form-options">
            <div className="form-element">
              <input
                type="checkbox"
                name="parents"
                checked={familyHistory.parents}
                onChange={handleChangeFamilyHistory}
              />
              Parents
              <SupervisorAccountIcon />
            </div>
            <div className="form-element">
              <input
                type="checkbox"
                name="siblings"
                checked={familyHistory.siblings}
                onChange={handleChangeFamilyHistory}
              />
              Siblings
              <EscalatorWarningIcon />
            </div>
          </div>
        </div>

        <div className="form-parent">
          <div className="form-content">
            <label className="genderLbl">Your Gender :</label>
          </div>
          <div className="form-options">
            <div className="form-element">
              <button
                className="w-10 h-10 rounded-full flex justify-start items-center"
                id="male"
                onClick={handleClickgender}
              >
                <img
                  src="../../public/images/403019_avatar_male_man_person_user_icon.png"
                  alt=""
                  style={{ pointerEvents: "none" }}
                  className={`object-cover w-full h-full rounded-full me-3 ${
                    gender === "female" || gender === "" ? "grayscale" : ""
                  }`}
                />
              </button>
            </div>
            <div className="form-element">
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleChange}
              />
              Female
              <WomanIcon />
            </div>
            <div className="form-element">
              <input
                type="radio"
                value="transgenger"
                checked={gender === "transgenger"}
                onChange={handleChange}
              />
              TransGender
              <TransgenderIcon />
            </div>
          </div>
        </div>

        <div className="form-parent">
          <div className="form-content">
            <label className="activityLbl">Activity Level :</label>
          </div>
          <div className="form-options">
            <div className="form-element">
              <input
                type="radio"
                value="lazy"
                checked={activity === "lazy"}
                onChange={handleActivityChange}
              />
              Not so active
              <AirlineSeatIndividualSuiteIcon />
            </div>
            <div className="form-element">
              <input
                type="radio"
                value="active"
                checked={activity === "active"}
                onChange={handleActivityChange}
              />
              Active
              <DirectionsBikeIcon />
            </div>
          </div>
        </div>

        <div className="form-parent">
          <div className="form-content">
            <label className="heightWeightLabel">Height & Weight :</label>
          </div>
          <div className="form-options">
            <div className="form-element">
              <input
                type="text"
                name="heightFt"
                value={heightWeight.heightFt}
                onChange={handleHeightWeightChange}
              />
              ft.
            </div>
            <div className="form-element">
              <input
                type="text"
                name="heightInch"
                value={heightWeight.heightInch}
                onChange={handleHeightWeightChange}
              />
              in.
            </div>
            <div className="form-element">
              <input
                type="text"
                name="weightLbs"
                value={heightWeight.weightLbs}
                onChange={handleHeightWeightChange}
              />
              lbs.
            </div>
          </div>
        </div>
      </form>

      <p>Family History parents: {familyHistory.parents.toString()}</p>
      <p>Family History siblings: {familyHistory.siblings.toString()}</p>
      <p>Gender : {gender}</p>
      <p>Activity : {activity}</p>
      <p>Height feet: {heightWeight.heightFt}</p>
      <p>Height inches: {heightWeight.heightInch}</p>
      <p>Weight: {heightWeight.weightLbs}</p>
    </div>
  );
};

export default FormComponent;
