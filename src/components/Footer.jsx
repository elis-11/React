import '../App.scss';

export const Footer = () => {
  const today = new Date();
  return (
      <footer className='Footer'>
          <p>Copyright &copy; {today.getFullYear()}</p>
          {/* <a href="https://elis-new.netlify.app/">https://elis-new.netlify.app/</a> */}
      </footer>
  )
}
