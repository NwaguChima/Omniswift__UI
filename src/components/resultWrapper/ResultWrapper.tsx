import React, { useRef, useState } from 'react';
import { useGetStudentResultMutation } from '../../feature/api/apiSlice';
import { getResColumns } from '../../utils/columns';
import Result from '../result/Result';
import styles from '../result/result.module.scss';
import { savePDF } from '@progress/kendo-react-pdf';
import Modal from './Modal';
import Spinner from '../spinner/Spinner';

interface ResultWrapperProps {
  id: number;
}

const ResultWrapper: React.FC<ResultWrapperProps> = ({ id }) => {
  const [getStudentResult] = useGetStudentResultMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  let [resultData, setResultData] = useState<any>(null);
  const pdfExportComponent = useRef<any>(null);

  async function handleExportWithComponent() {
    setLoading(true);
    setIsModalOpen(true);
    try {
      const result: any = await getStudentResult(id);
      setResultData(result.data);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  // function handleModal() {}

  return (
    <a className={styles.action} onClick={handleExportWithComponent}>
      Download Result
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          content={
            loading ? (
              <div className={styles.loadingText}>
                <Spinner />
              </div>
            ) : (
              <>
                <div className={styles.resultBtn}>
                  <button onClick={handleExportWithComponent}>
                    Export PDF
                  </button>
                  <button
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Close Result
                  </button>
                </div>
                <Result
                  data={resultData}
                  columns={getResColumns()}
                  rowsData={resultData.data?.result}
                />
              </>
            )
          }
        />
      )}
    </a>
  );
};

export default ResultWrapper;
