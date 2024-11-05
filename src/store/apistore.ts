import axios from 'axios';
import { defineStore } from 'pinia';

export const useHRMSDataStore = defineStore('HRMSData', {
    state: () => ({
        companyData: [],
        superVisordetails:[],
    }),

    actions: {
        Loginregistration(reqBody: any){ // Specify the type for reqBody
            return axios
                .post(`${import.meta.env.VITE_API_URL}auth/login`, reqBody)
                .then((response) => {
                    // this.companyData = response.data;
                    // console.log("Login",  response)
                    return response; 
                })
                .catch((error) => {
                    console.error('Failed to post Login details:', error);
                    throw error;
                });
        },
        getCompanyProfile() {
            return axios
                .get(`${import.meta.env.VITE_API_URL}`)
                .then((response) => {
                    this.companyData = response.data;
                    // console.log("set",  this.companyData)
                })
                .catch((error) => {
                    console.error('Failed to fetch company profile:', error);
                });
        },
        Employeeregister(reqBody: any){ 
            return axios
                .post(`${import.meta.env.VITE_API_URL}employee/addEmployee`, reqBody)
                .then((response) => {                  
                    // console.log("Login",  response)
                    return response; 
                })
                .catch((error) => {
                    console.error('Post Error', error);
                    throw error;
                });
        },
        getSupervisor(){
            return axios
                .get(`${import.meta.env.VITE_API_URL}employee/getManagers`)
                .then((response) => {
                    // this.superVisordetails = response.data;
                    // console.log("set",  this.companyData)
                    return response.data; 
                })
                .catch((error) => {
                    console.error('Failed to fetch supervisor details:', error);
                });
        },
        SaveLeavedata(reqBody: any){
            return axios
            .post(`${import.meta.env.VITE_API_URL}leaves/sendRequest`, reqBody)
            .then((response) => {                  
                // console.log("Login",  response)
                return response; 
            })
            .catch((error) => {
                console.error('Post Error', error);
                throw error;
            });
        },
        getLeavesdata(empID: any){
            return axios
            .get(`${import.meta.env.VITE_API_URL}leaves/viewEmpLeaveRequests?emp_id=${empID}`)
            .then((response) => {                  
                // console.log("Login",  response)
                return response.data; 
            })
            .catch((error) => {
                console.error('Post Error', error);
                throw error;
            });
        }
       
    },
    // persist: {
    //     enabled: true, // This enables persistence
    //     // strategies: [
    //     //     {
    //     //         key: 'HRMSData', // Custom key to store the state
    //     //         storage: localStorage // Use localStorage (you can also use sessionStorage)
    //     //     }
    //     // ]
    // }
});
