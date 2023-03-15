import React, { useRef, useState } from 'react';
import { useGetStudentResultMutation } from '../../feature/api/apiSlice';
import { getResColumns } from '../../utils/columns';
import Result from '../result/Result';
import styles from '../result/result.module.scss';
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
  let [pdfExportBtn, setPdfExportBtn] = useState<any>(null);

  async function loadResult() {
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

  return (
    <a className={styles.action} onClick={loadResult}>
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
                  <button onClick={() => pdfExportBtn()}>Export PDF</button>
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
                  setPdfExportBtn={setPdfExportBtn}
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
