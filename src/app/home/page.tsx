'use client';

import CoreContext from "@/components/CoreContext";
import NavBar from "@/components/Nav";
import { Box, Button, Card, Dialog, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { Formik } from "formik";
import { GENDER_BY_ID } from "@/lib/enum";
import { use, useContext, useMemo, useState } from "react";
import { Close } from "@mui/icons-material";


const dietTypes={
    1: "Vegetarian",
    2: "Non-Vegetarian",
    3: "Vegan",
    4: "Pescatarian"
}

interface IUserProfile{
    first_name: string;
    last_name: string;
    age: number;
    height: number;
    weight: number;
    diet_preference:number
}

export default function HomePage() {

    const [ showEditProfile, setShowEditProfile ] = useState(false)

    return(

        <>
            <NavBar />

           <Box
            className='p-4'
           >
             <UserProfile
                onClickEdit={()=> setShowEditProfile(true)}
             />
             <EditProfile
                open={showEditProfile}
                onClose={()=> setShowEditProfile(false)}
             />
           </Box>
           
        </>

    )

}

function EditProfile({open, onClose}:{open:boolean, onClose:()=>void}) {

    // @ts-ignore
    const { user, setUser } = useContext(CoreContext)

    const onSubmit = (values:any, actions:any) =>{
        console.log({values})
        actions.setSubmitting(false)

        const updateUser = {
            first_name:values.first_name,
            last_name:values.last_name,
            gender: parseInt(values.gender) || 0 ,
            height:values.height,
            weight:values.weight,
            age:values.age
        }

        console.log({updateUser, setUser})
        setUser(updateUser);
        onClose()
    }

    return(
        <Drawer
            open={open}
            onClose={()=>{}}
            anchor="right"
            sx={{
                width:'50vw',
                 '& .MuiDialog-paper': {
                    padding: 2,
                    borderRadius: 2,
                },
                borderTopLeftRadius:'8px !important',
                borderBottomLeftRadius:'8px !important'
            }}
        >
            <Box 
                sx={{
                    maxWidth:'50vw'
                }}
            >
                <div className="card-title px-2 pt-3">
                    <Box
                        sx={{
                            display:'flex',
                            justifyContent:'space-between'
                        }}
                    >
                        <Typography variant="h5" component="h2">
                            Edit Profile
                        </Typography>

                        <IconButton
                            onClick={onClose}
                        >
                            <Close/>
                        </IconButton>
                    </Box>
                </div>

                <div className=" px-4">
                        <Formik
                            initialValues={user}
                            onSubmit={onSubmit}
                        >
                            {
                                ({values, isSubmitting, handleSubmit, handleChange})=>(
                                    <form
                                        onSubmit={handleSubmit}
                                    >
                                        <Box>
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
                                                            value={values.first_name}
                                                            onChange={handleChange}
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
                                                    <div>
                                                        <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                                            Last name
                                                        </label>
                                                        <input
                                                            name="last_name"
                                                            required
                                                            value={values.last_name}
                                                            onChange={handleChange}
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
                                                    <div>
                                                        <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                                            Gender
                                                        </label>
                                                        <select
                                                            id="email"
                                                            name="gender"
                                                            required
                                                            className='form-control'
                                                            value={values.gender+""}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="0">
                                                                Male
                                                            </option>

                                                            <option value="1">
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
                                                    <div>
                                                        <label htmlFor="email" className="d-block text-sm font-medium text-gray-700">
                                                            Age
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="age"
                                                            value={values.age}
                                                            onChange={handleChange}
                                                            required
                                                            className='form-control'
                                                            placeholder="age"
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
                                                            Height (Inches)
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="height"
                                                            value={values.height}
                                                            onChange={handleChange}
                                                            required
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
                                                            Weight (Kg)
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="weight"
                                                            value={values.weight}
                                                            onChange={handleChange}
                                                            required
                                                            className='form-control'
                                                        />
                                                    </div>
                                                </Grid> 
                                            </Grid>
                                        </Box>
                                        
                                        <Box
                                            sx={{
                                                display:"flex",
                                                justifyContent:'flex-end'
                                            }}
                                        >
                                            <Button 
                                                variant="contained" 
                                                color="primary"
                                                type="submit"
                                                disableElevation
                                                sx={{
                                                    textTransform:'capitalize',
                                                    fontWeight:'bold'
                                                }}
                                            >
                                                Save Changes
                                            </Button>
                                        </Box>
                                    </form>
                                )
                            }
                        </Formik>
                </div>
            </Box>
        </Drawer>
    );
}


function UserProfile({onClickEdit}:{onClickEdit:()=>void}) {


    const context = useContext(CoreContext)

    //@ts-ignore
    const user = context.user as IUserProfile;

    const bmiText = useMemo(()=>{
        const heightInMeters = 0.0254 * user.height
        const bmi = user.weight * Math.sqrt(heightInMeters) 
        let bmiCategory ;
        if(bmi < 18.5){
            bmiCategory = 'Underweight'
        }else if(bmi >= 18.5 && bmi <= 24.9){
            bmiCategory = "Normal"
        }else if(bmi >= 25 && bmi <= 29.9){
            bmiCategory = 'Overweight'
        }else if(bmi >= 30){
            bmiCategory = 'Obese'
        }
        return  {bmi, bmiCategory}
    },[user])


    return (
        <Box className="card">
            <div className="card-title px-2 pt-3">
            
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        px: 2,
                        pt:1
                    }}
                >
                    <Typography className="text-secondary" variant="h5" component="h2">
                        My Profile
                    </Typography>

                    <Button
                       sx={{
                        bgcolor:'whitesmoke',
                        fontWeight:'bold',
                        textTransform:'none',
                       }}
                        disableElevation
                        onClick={onClickEdit}
                    >
                        Edit
                    </Button>
                </Box>
            </div>

            <div className="card-body px-4">
                <div 
                    className="row g-2"
                >
                    <div className="col-12 col-md-4">
                         <Labels label="Name" value={user.first_name} />
                    </div>
                     <div className="col-12 col-md-4">
                         <Labels label="Age" value={user.age} />
                    </div>
                     <div className="col-12 col-md-4">
                         <Labels label="Gender" value={
                            // @ts-ignore
                            GENDER_BY_ID[user.gender] 
                        } />
                    </div>
                     <div className="col-12 col-md-4">
                         <Labels label="Height" value={user.height+' Inches'} />
                    </div>

                    <div className="col-12 col-md-4">
                         <Labels label="Weight" value={user.weight+' Kgs'}/>
                    </div>

                    <div className="col-12 col-md-4">
                        <Labels label="BMI" value={`${bmiText.bmi.toFixed(2)} / ${bmiText.bmiCategory}`}/>
                    </div>
                </div>
                <div>
                </div>
            </div>  
        </Box>
    );
}

interface LabelProps {   
     label: string;
     value: string|number;
}

const Labels = (props:LabelProps) =>{
    return(
         <div>
            <Typography>
               {props.label}
            </Typography>
            <Typography 
                className="text-secondary" 
                variant="body1"
                 component="p"
                 sx={{
                    textTransform: 'capitalize',
                 }}
            >
                {props.value}
            </Typography>
        </div>
    )
}

