import { CardContainer, InputCard } from '@app/components';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className={
        'h-screen w-screen flex justify-center items-center bg-[url(./assets/images/loginbg.png)]'
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/');
        }}
        aria-description={'Login Form'}
        className={'max-w-lg w-full'}
      >
        <CardContainer title={'Login'} padding={'sm'}>
          <div className="flex flex-col gap-xl items-center w-full p-2xl">
            <InputCard
              required={true}
              minLength={10}
              errorText={'Number is required for authentication'}
              aria-description={'Input field for entering number'}
              label={'Number'}
              type={'tel'}
              name={'phone_number'}
            />
            <InputCard
              minLength={4}
              label={'OTP'}
              type={'number'}
              name={'otp'}
            />
          </div>
          <button
            type={'submit'}
            className="flex justify-center items-center  relative w-full py-6 rounded-bl-xl rounded-br-xl bg-primary"
          >
            <p className="ext-2xl text-center text-surface">Login</p>
          </button>
        </CardContainer>
      </form>
    </div>
  );
};
