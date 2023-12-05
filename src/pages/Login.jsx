import { InputCard, Loader } from '@app/components';
import { DataContext } from '@app/store';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { actions, data } = useContext(DataContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    phoneNumber: '',
    otp: '',
  });

  useEffect(() => {
    document.title = 'Login';
    if (data.auth.authenticated) {
      navigate('/');
    }
    return () => {};
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    actions.update.auth({
      authenticated: true,
      phoneNumber: formData.phoneNumber,
    });
    navigate('/');
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-screen hstack justify-center items-center bg-[url(./assets/images/loginbg.png)] relative">
      <div className="absolute left-0 right-0 bottom-0 top-0   px-4 md:px-0 hstack bg-black bg-opacity-5 backdrop-blur-md vstack justify-center items-center">
        <form onSubmit={handleSubmit} className="max-w-lg w-full">
          {/* Use a <section> to represent the login form */}
          <section className="min-w-[325px] h-full vstack w-full justify-center items-center relative gap-lg p-sm rounded-xl bg-surface">
            {/* Use <h1> for the main heading of the form */}
            <h1 className="text-sectiontitle w-full py-4 font-bold text-center capitalize text-black">
              LittleLemon
            </h1>
            <div className="vstack justify-start items-start w-full gap-xl">
              <div className="vstack gap-xl items-center w-full p-2xl">
                {/* Use <fieldset> for a group of related form controls */}
                <fieldset
                  className={'w-full flex flex-col items-center justify-center'}
                >
                  {/* Phone Number Input */}
                  <InputCard
                    required={true}
                    errorText={'Phone number is required'}
                    label={'Number'}
                    type={'tel'}
                    name={'phone_number'}
                    minLength={11}
                    placeholder={'Enter your phone number'}
                    value={formData.phoneNumber}
                    onChange={(value) =>
                      handleInputChange('phoneNumber', value)
                    }
                  />
                  {/* OTP Input */}
                  <InputCard
                    required={true}
                    errorText={'OTP is required'}
                    label={'OTP'}
                    type={'number'}
                    name={'otp'}
                    placeholder={'Enter the OTP'}
                    minLength={4}
                    value={formData.otp}
                    onChange={(value) => handleInputChange('otp', value)}
                  />
                </fieldset>
              </div>
              {/* Use a <button> element for the submit button */}
              <button
                disabled={loading}
                type={'submit'}
                className="hstack justify-center items-center relative w-full py-6 rounded-bl-xl rounded-br-xl bg-primary text-surface hover:text-secondary"
                aria-label="Submit Login Form"
              >
                {loading ? (
                  <Loader />
                ) : (
                  <p className="text-2xl text-center">Login</p>
                )}
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
