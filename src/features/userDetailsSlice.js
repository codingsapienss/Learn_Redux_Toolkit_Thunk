import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    users: [],
    loading: false,
    error: false,
}

// Create Action (Creating the form)

export const createUser = createAsyncThunk(
    'createUser',

    async (data, { rejectWithValue }) => { // !This async function recieves the data as the first parameter which is being send as a payload in dispatch function

        const response = await fetch('https://64a39afac3b509573b564f6b.mockapi.io/crud',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )

        try {
            const result = await response.json()
            return result
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)



//! Read Action 
export const showUser = createAsyncThunk(
    'showUser',
    async (args, { rejectWithValue }) => {
        const response = await fetch('https://64a39afac3b509573b564f6b.mockapi.io/crud')

        try {
            const result = await response.json()
            // console.log(result)
            return result
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

//! Delete Action

export const deleteUser = createAsyncThunk(
    'deleteUser',
    async (id, { rejectWithValue }) => {
        const response = await fetch(`https://64a39afac3b509573b564f6b.mockapi.io/crud/${id}`, {
            method: 'DELETE'
        })

        try {
            const result = await response.json()
            // console.log(result);
            return result
        } catch (err) {
            rejectWithValue(err)
        }
    }
)



//! Update Action   

export const updateUser = createAsyncThunk(
    'updateUser',
    async (data, { rejectWithValue }) => {
        const response = await fetch(`https://64a39afac3b509573b564f6b.mockapi.io/crud/${data.id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )

        try {
            const result = await response.json()
            return result
        } catch (err) {
            return rejectWithValue(err)
        }
    }

)




export const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {

    },

    //! Older Way of using extrareducers


    // extraReducers: {
    //     [createUser.pending]: (state) => {
    //         state.loading = true
    //     },

    //     [createUser.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.users.push(action.payload) //Here we are using push so that all the previous data should also be present 
    //     },

    //     [createUser.rejected]: (state, action) => {
    //         state.loading = false,
    //             state.users = action.payloaad //Here we are assigning so that all the data get replaced by the error message
    //     },


    //     [showUser.pending]: (state) => {
    //         state.loading = true
    //     },

    //     [showUser.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.users = action.payload
    //     },

    //     [showUser.rejected]: (state, action) => {
    //         state.loading = false,
    //             state.users = action.payloaad //Here we are assigning so that all the data get replaced by the error message
    //     }



    // }


    //! Newer way of calling extrareducers

    extraReducers: (builder) => {

        //* createUser Actions
        builder.addCase(createUser.pending, (state) => {
            state.loading = true
        })

        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        })

        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })



        //* showUser Actions 
        builder.addCase(showUser.pending, (state) => {
            state.loading = true
        })

        builder.addCase(showUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })

        builder.addCase(showUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })






        //* deleteUser Actions

        builder.addCase(deleteUser.pending, state => {
            state.loading = true
        })

        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false
            // console.log(action.payload);
            state.users = state.users.filter(user => user.id !== action.payload.id)
        })

        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })


        //! Update action


        builder.addCase(updateUser.pending, state => {
            state.loading = true
        })

        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user)
        })

        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

    }
})

// const { } = userDetailsSlice.actions

export default userDetailsSlice.reducer