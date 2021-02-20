import React from 'react';
import FormButton from "../../styledElements/FormButton.jsx";
import HalfRoundDiv from "../../styledElements/HalfRoundDiv.jsx";
import InputTypeText from "../../styledElements/InputTypeText.jsx";

let GuestInfo = (props) => {
  return (
    <HalfRoundDiv id={'roomListContainer'}>
      <h1 className="guestInfo">Guest Information</h1>
      <form className="guestForm" onSubmit={(event) => {
        props.getGuestInfo(event);
        props.goToNext(event);
      }}>
        <h2>First Name</h2>
        <InputTypeText placeholder={'First Name'}/>
        <h2>Last Name</h2>
        <InputTypeText placeholder={'Last Name'}/>
        <h2>Phone</h2>
        <InputTypeText placeholder={'Phone Number'}/>
        <h2>Email</h2>
        <InputTypeText placeholder={'Email'}/>
        <InputTypeText
          type='submit'
          onClick={props.goToNext}
          id={'guestInfo'}
        />
      </form>
    </HalfRoundDiv>
  );
};

export default GuestInfo;