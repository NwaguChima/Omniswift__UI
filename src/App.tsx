import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetStudentsQuery } from './feature/api/apiSlice';
import { fetchStudentList } from './feature/student/studentSlice';
import Home from './pages/home';
import './styles/global.scss';

function App() {
  const dispatch = useDispatch();
  const {
    data: students,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetStudentsQuery('');

  useEffect(() => {
    dispatch(
      fetchStudentList({
        students,
        status: isLoading
          ? 'loading'
          : isError
          ? 'failed'
          : isSuccess
          ? 'success'
          : 'idle',
        error,
      })
    );
  }, [isLoading, isError, isSuccess, error, students, dispatch]);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
