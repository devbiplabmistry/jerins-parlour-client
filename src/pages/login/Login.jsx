import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png'
import { BsGoogle } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../providers/authProvider';

const Login = () => {
    const {   googleSignIn } = useContext(AuthContext)
    const GoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                // console.log(user.email);
            })
            .catch((error) => {
                console.log(error);
            });


    }

    return (
        <div className='mx-auto text-center'>
            <img className='text-center mx-auto my-24 w-40' src={logo} alt="" />
            <h3 className='font-Montserrat font-bold text-2xl text-black mb-8'>Login With</h3>
            <p onClick={GoogleSignIn} className='flex gap-4 border rounded-3xl p-2 justify-evenly mx-auto font-Montserrat font-medium text-base text-black items-center max-w-sm'><BsGoogle ></BsGoogle>Continue with Google</p>
            <p className='font-Montserrat font-medium text-base text-black mt-4'>Don’t have an account? <Link to="/signUp"><span className='text-[#F63E7B]'>Create an account</span></Link></p>
        </div>
    );
};

export default Login;