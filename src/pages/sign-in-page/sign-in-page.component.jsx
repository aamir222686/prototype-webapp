import React from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';


const SignIn = () => {

    return (
        <div className="vh-100 dt w-100" >
            <div className="dtc v-mid tc">
                <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-3 code">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f2 fw6 ph0 mh0 tc">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                </div>
                            </fieldset>
                            <div className="center">
                                <Link to='/cat-store'><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib tc" type="submit" value="Sign in" ></input></Link>
                            </div>
                            <div className="lh-copy mt3">
                                <p href="#0" className="f6 link pointer dim black db tc">Store Owner? Click Here To Sign In</p>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        </div >
    );
}

export default SignIn; 