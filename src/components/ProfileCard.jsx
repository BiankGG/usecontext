const ProfileCard = (props) => {
  return (
    <div className='Profile-card'>
      <img src={props.image} alt='Profile' className='card-image' />
      <div className="card-text">
        <p> Name: {props.name}</p>
        <p> Last Name: {props.surname}</p>
        <p> Address: {props.address}</p>
        <p> Age: {props.age}</p>
        <p> Postal Code: {props.postalCode}</p>
        <p> City: {props.city}</p>
        <p> Phone Number: {props.phone}</p>
      </div>
    </div>
  );
};

export default ProfileCard;

// name='' surname='' address= '' age= '' postalCode='' city='' phone=''
