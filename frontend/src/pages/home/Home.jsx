import { useQuery } from '@tanstack/react-query'
import React from 'react'
import userApi from '../../api/data-set/userApi'
import { getUserStart, getUserSuccess, getUserFail } from '../../redux/reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
  const { currentUser, loading, error } = useSelector((state) => state.auth)
  console.log(currentUser)
  const dispatch = useDispatch()
  const {data:UserInfo, isError, isSuccess, isLoading } = useQuery({
    queryFn : () =>
      userApi.getUserInfo(),
    queryKey : ['getUserapi'],
    select : (data) => {{
      // data?.data;
     dispatch(getUserSuccess(data?.data));
    }
    },
  })

  return (
    <div>
      Home {" "}
      {
        UserInfo?.firstName
      }

    </div>
  )
}

export default Home