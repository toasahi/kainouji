import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { SSignUp } from '../../constant/BaseCss';
import { useSingUp } from '../../hooks/useSingUp';
import { IFormValues } from '../../types/form/form';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondInput } from '../Inputs/SecondInput';
import { PrimarySpinner } from '../spinners/PrimarySpinner';

export const SignUp = memo(() => {
  const { singUp, loading } = useSingUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    singUp(data);
  };

  return (
    <>
      {loading ? (
        <PrimarySpinner />
      ) : (
        <SSignUp>
          <main>
            <div className="user-info-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="item">
                  <label htmlFor="email">メールアドレス</label>
                  <SecondInput label="email" inputType="email" register={register} required />
                  {errors.email && <span>メールアドレスを入力してください</span>}
                </div>
                <div className="item">
                  <label htmlFor="username">ユーザ名</label>
                  <SecondInput label="username" inputType="text" register={register} required />
                  {errors.username && <span>ユーザ名を入力してください</span>}
                </div>
                <div className="item">
                  <label htmlFor="password">パスワード</label>
                  <SecondInput label="password" inputType="password" register={register} required />
                  {errors.password && <span>パスワードを入力してください</span>}
                </div>
                <div className="button-container">
                  <PrimaryButton children="アカウントを作成" position="after" onClick={() => console.log()} />
                </div>
              </form>
              <nav>
                <ul className="account-nav">
                  <li className="account-nav-item">
                    <label>アカウントをお持ちですか？</label>
                    <Link to="/">ログイン</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </main>
        </SSignUp>
      )}
    </>
  );
});
