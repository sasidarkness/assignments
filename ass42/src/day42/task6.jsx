function ProfileCard(s) {
  return (
    <div >
      <img src={s.avatar} alt="dfghjkl" />
     
      <h2>{s.name}</h2>
      <p >{s.job}</p>
    </div>
  );
}
export default ProfileCard

