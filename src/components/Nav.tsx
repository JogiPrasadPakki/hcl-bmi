"use client";
import { useMemo, useContext } from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Typography } from "@mui/material";
import CoreContext from "./CoreContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Link from "next/link";


const loginURL = (redirectUrl: string, userAgent: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_OAUTH_SERVER;
  const clientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
  const tenantId = process.env.NEXT_PUBLIC_OAUTH_TENANT_ID;

  return `${baseUrl}/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=openid profile email&tenantId=${tenantId}&userAgent=${encodeURIComponent(userAgent)}`;
}


export default function TopNav() {

    // @ts-ignore
    const { user, setUser } = useContext(CoreContext)
 



  const { data, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return axios.get("/account");
    },
  });



  const bmi = useMemo(()=>{
     const heightInMeters = 0.0254 * user.height
     return ((user.weight * Math.sqrt(heightInMeters) ) || 0).toFixed(2)
  }, [user])

  const onClickLogout = ()=>{
    const url = `${process.env.NEXT_PUBLIC_OAUTH_SERVER}/oauth2/logout?client_id=${
      process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID
    }&tenantId=${process.env.NEXT_PUBLIC_OAUTH_TENANT_ID}`;
    window.location.replace(url);
  }

  return (
    <>
     
      <Box
        sx={{
          bgcolor: "white",
          py: "10px",
          px: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #eee",
        }}
      >
        <Box
          sx={{
            width: "310px",
          }}
        >
          <Link
            href='/'
          >
            <Typography variant="h5" className="text-secondary" color="primary">
              HCL Health
            </Typography>
          </Link>
          
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
                color="success"
                className="me-3 "
                sx={{
                    display:'block',
                    fontWeight: 'bold',
                }}
            >
                {`Your BMI: ${bmi}`}
            </Typography>

            {
              !isSuccess&&(
                <Button
                  sx={{
                    bgcolor:'whitesmoke',
                    whiteSpace:'nowrap',
                    textTransform:'none',
                    fontWeight:'bold',
                  }}
                  component={Link}
                  href="/login"
                >
                  Logout
                </Button>
              )
            }
          </Box>
        </Box>
      </Box>
    </>
  );
}
