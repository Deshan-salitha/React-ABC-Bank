import './css/Login.css';
const Login = () => {
    return (
        <div className="flex flex-row">
            <div className="basis-6/12 bg-white h-screen">
                <p className="cover-title">ABC Bank</p>
                <p className="cover-description">Secure, convenient banking anytime</p>
            </div>
            <div className="basis-6/12 login h-screen">
                <div className='container'>
                    <p className="login-title">ABC Bank</p>
                    <p className="login-description">Secure, convenient banking anytime</p>
                </div>
                <div className='container self-center flex flex-col'>
                    <lable>User Name</lable>
                    <input className='input' type="email"></input>
                    <lable>Password</lable>
                    <input type="password"></input>
                </div>

            </div>
        </div>

    );
}

export default Login;