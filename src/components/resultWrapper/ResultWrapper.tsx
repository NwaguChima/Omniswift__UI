import React, { useRef, useState } from 'react';
import { useGetStudentResultMutation } from '../../feature/api/apiSlice';
import { getResColumns } from '../../utils/columns';
import Result from '../result/Result';
import styles from '../result/result.module.scss';
import { savePDF } from '@progress/kendo-react-pdf';
import Modal from './Modal';

interface ResultWrapperProps {
  id: number;
}

const ResultWrapper: React.FC<ResultWrapperProps> = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getStudentResult] = useGetStudentResultMutation();
  const pdfExportComponent = useRef<any>(null);

  async function handleExportWithComponent(event: any) {
    console.log('event', event);
    try {
      const result: any = await getStudentResult(id);
      console.log('result=========>>>>>>>>', result.data);
    } catch (error) {
      console.log('error', error);
    } finally {
      savePDF(pdfExportComponent.current, {
        paperSize: 'A4',
      });
    }
  }

  function handleModal() {
    setIsModalOpen(true);
  }

  console.log('isModalOpen', isModalOpen);

  return (
    <a className={styles.action} onClick={handleModal}>
      Download Result
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          content={
            <>
              <div>
                <button onClick={handleExportWithComponent}>Export PDF</button>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                >
                  Close Result
                </button>
              </div>
              <Result
                data={[
                  {
                    id: 1,
                    courseCode: 'PDE 701',
                    courseTitle: 'Measurement and Evaluation',
                    unit: 3,
                    grade: 'A',
                    totalPoint: 9,
                  },
                  {
                    id: 1,
                    courseCode: 'PDE 701',
                    courseTitle: 'Measurement and Evaluation',
                    unit: 3,
                    grade: 'A',
                    totalPoint: 9,
                  },
                ]}
                columns={getResColumns()}
              />
            </>
          }
        />
      )}
    </a>
  );
};

export default ResultWrapper;
