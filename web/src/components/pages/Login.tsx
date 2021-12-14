import { memo, VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { SSecondLogin } from '../../constant/BaseCss';
import { useLogin } from '../../hooks/useLogin';
import { IFormValues } from '../../types/form/form';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondInput } from '../Inputs/SecondInput';

export const Login: VFC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    login(data);
  };
  const { login } = useLogin();
  return (
    <SSecondLogin>
      <>
        <main>
          <div className="user-info-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="item">
                <label htmlFor="email">メールアドレス</label>
                <SecondInput label="email" inputType="email" register={register} required />
                {errors.email && <span>メールアドレスを入力してください</span>}
              </div>
              <div className="item">
                <label htmlFor="password">パスワード</label>
                <SecondInput label="password" inputType="password" register={register} required />
                {errors.password && <span>パスワードを入力してください</span>}
              </div>
              <div className="button-container">
                <PrimaryButton children="ログイン" position="after" onClick={() => console.log()} />
              </div>
            </form>
            <nav>
              <ul className="account-nav">
                <li className="account-nav-item">
                  <Link to="/signup">アカウント作成</Link>
                </li>
                <li className="account-nav-item">
                  <Link to="">パスワードを忘れましたか？</Link>
                </li>
              </ul>
            </nav>
          </div>
        </main>
      </>
    </SSecondLogin>
  );
});
