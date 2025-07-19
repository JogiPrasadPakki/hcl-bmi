'use client'

import { Box, Button, Grid, Typography } from '@mui/material';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage(){
    const [ showRegister, setShowRegister ] = useState(false)

    return(
        <Box
            sx={{
                height:'100vh',
                display:'grid',
                alignItems:'center'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f2f5',
                    padding: 2,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: 2,
                    maxWidth: 500,
                    margin: 'auto',
                }}
        >

            {
                showRegister?<CreateAccount onClickLogin={()=> setShowRegister(false)}/>:<LoginPage onClickRegister={()=> setShowRegister(true)}/>
            }
        </Box>
        </Box>
        
    )
}

interface ILogin{
    onClickRegister:()=>void
}

interface ICreateAccount{
    onClickLogin:()=>void
}

export function LoginPage(props:ILogin) {

    const router = useRouter()

    const onSubmit =(values:any, actions:any) =>{

        router.replace('/home')

        actions.setSubmitting(false)

    }

    return (

        <>
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>

                <Grid
                    sx={{
                        width:'100%'
                    }}
                    container
                    spacing={2}
                >
                    <Formik
                        initialValues={{
                            email:'',
                            password:''
                        }}
                        onSubmit={onSubmit}
                    >
                        {
                            ({values, handleChange, handleSubmit}) =>(
                                <form onSubmit={handleSubmit} style={{width:'100%'}}>

                                    <Grid
                                        sx={{
                                            width:'100%'
                                        }}
                                        container
                                        spacing={2}
                                    >

                                        <Grid
                                            size={12}
                                        >
                                            <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                                Email*
                                            </label>
                                            <Box
                                                required
                                                component='input'
                                                type="email"
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                className='form-control'
                                            />
                                        </Grid>

                                        <Grid
                                            size={12}
                                        >
                                            <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                                Password*
                                            </label>
                                            <Box
                                                required
                                                component='input'
                                                type="password"
                                                name='password'
                                                onChange={handleChange}
                                                value={values.password}
                                                className='form-control'
                                            />
                                        </Grid>

                                        <Grid
                                            size={12}
                                        >
                                            <Box
                                                sx={{
                                                    width:'100%',
                                                    display:'grid',
                                                    justifyContent:'center'
                                                }}
                                            >
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        type='submit'
                                                        className="w-full"
                                                        style={{ backgroundColor: '#1976d2' }}
                                                        onClick={() => console.log('Sign in clicked')}
                                                        disableElevation
                                                        sx={{
                                                            mx:'auto',
                                                            textTransform:'capitalize',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Sign in
                                                    </Button>
                                            </Box>
                                            
                                        </Grid>
                                      </Grid>
                                </form>
                            )
                        }
                    </Formik>
                </Grid>

                <Typography variant="body2" color="textSecondary" align="center" className="mt-4">
                    Don't have an account?{' '}
                    <p role='button' className="text-blue-600 hover:text-blue-500 d-inline" onClick={props.onClickRegister}>
                        Register
                    </p>    
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" className="mt-2">
                    <a href="/forgot-password" className="text-blue-600 hover:text-blue-500">
                        Forgot Password?
                    </a>        
                </Typography>

        </>

    )



  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Login</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>        
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder=" Email address"  
            />
          </div>
          <div>         
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font       -semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >       
                Sign in    
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:text-blue-500">
            Register
          </a>
        </p>        
        </div>      
        </div>          
    );  
}

function CreateAccount(props:ICreateAccount) {

        return (
            <div className="flex h-screen items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-6 bg   -white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 text-center">Create Account</h2>
                    <form className="space-y-6">

                        <Grid 
                            container
                            spacing={2}
                            className="mb-4"

                        >
                            <Grid  
                                size={{
                                    xs:12,
                                    md:6
                                }}
                            >
                                <div 
                                >
                                    <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                        First Name*
                                    </label>
                                    <input
                                        name="first_name"
                                        required
                                         className='form-control'
                                        placeholder="First name"
                                    />
                                </div>
                            </Grid>

                             <Grid  
                                size={{
                                    xs:12,
                                    md:6
                                }}
                            >
                                <div 
                                >
                                    <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        name="last_name"
                                        required
                                        placeholder="Last name"
                                         className='form-control'
                                    />
                                </div>
                            </Grid>

                            <Grid  
                                size={{
                                    xs:12,
                                    md:6
                                }}
                            >

                                <div 
                                >
                                    <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                       Gender
                                    </label>
                                    <select
                                        id="email"
                                        name="gender"
                                        required
                                        className='form-control'
                                    >
                                        <option>
                                            Male
                                        </option>

                                         <option>
                                            Female
                                        </option>
                                    </select>
                                </div>
                            </Grid>

                            <Grid  
                                size={{
                                    xs:12,
                                    md:6
                                }}
                            >
                                <div 
                                >
                                    <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        name="age"
                                        required
                                        className='form-control'
                                        placeholder="age"
                                    />
                                </div>
                            </Grid>

                            <Grid  
                                size={{
                                    xs:12,
                                }}
                            >
                                 <div 
                                >
                                    <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                         className='form-control'
                                        placeholder="Email address"
                                    />
                                </div>
                            </Grid>

                            <Grid  
                                size={{
                                    xs:12,
                                    md:6
                                }}
                            >

                                <div>
                                    <label htmlFor="password" className="d-block text-sm font-medium text-gray-700">
                                        Password*
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </Grid>

                            <Grid  
                                size={{
                                    xs:12,
                                    md:6
                                }}
                            >

                                <div>
                                    <label htmlFor="password" className="d-block text-sm font-medium text-gray-700">
                                        Confirm Password*
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </Grid>

                        </Grid>

                        <div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    marginTop: 2,
                                    marginBottom: 2,
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    type="submit"
                                    color='primary'
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        textTransform:'capitalize',
                                        fontWeight:'bold'
                                    }}
                                >
                                    Create Account
                                </Button>
                            </Box>
                            
                        </div>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <p 
                            role='button' 
                            className="text-blue-600 hover:text-blue-500"
                            onClick={props.onClickLogin}
                        >
                            Login
                        </p>
                    </p>
                </div>
            </div>
        )


}