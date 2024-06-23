import React, { useEffect, useState } from 'react';
import { getAllFeedbacks, updateFeedback } from '../../utils/FeedbackApi';
import { FaTrashAlt } from 'react-icons/fa';
import Toast from '../../common/Toast';

const FeedbackManagement = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: '',
      feedbackName: '',
      fullName_customer: '',
      phone_customer: '',
      email_customer: '',
      feedbackContent: '',
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackStatus, setFeedbackStatus] = useState('pending');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [response, setResponse] = useState({
    id: 1,
    responseContent: '',
  });
  const [isResponse, setIsResponse] = useState(false);
  const [isDeleted, setIsDeleted] = useState(null);

  const fetchFeedbacks = async () => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;

    setIsLoading(true);
    try {
      const res = await getAllFeedbacks(1, 1000, accessToken);
      const reversedFeedbacks = [...res.data.data.result].reverse();
      setFeedbacks(reversedFeedbacks);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleChangeFeedbackStatus = (e) => {
    setFeedbackStatus(e.target.dataset.status);
  };

  const handleDeleteFeedback = async (id) => {
    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;
    setIsDeleted(id);
    try {
      const res = await updateFeedback(id, 'delete', '', accessToken);
      if (res.status === 200) {
        setMessage(`Xóa yêu cầu #${id} thành công`);
        setStatus('success');
        fetchFeedbacks();
      }
    } catch (err) {
      console.error(err);
      setMessage(`Xóa yêu cầu #${id} thất bại`);
      setStatus('danger');
    } finally {
      setResponse({
        id: null,
        responseContent: '',
      });
      setIsDeleted(null);
      setTimeout(() => {
        handleCloseToast();
      }, 5000);
    }
  };

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  const handleChangeResponseId = (e) => {
    const id = e.currentTarget.dataset.id;
    setResponse({ ...response, id: id, responseContent: '' });
  };

  const handleChangeResponseContent = (e) => {
    const value = e.target.value;
    setResponse({ ...response, responseContent: value });
  };

  const handleResponseFeedBack = async (e) => {
    e.preventDefault();

    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;
    setIsResponse(true);
    try {
      const res = await updateFeedback(
        parseInt(response.id),
        'success',
        response.responseContent,
        accessToken
      );
      if (res.status === 200) {
        setMessage(`Phản hồi yêu cầu #${response.id} thành công`);
        setStatus('success');
        setResponse({ ...response, id: null, responseContent: '' });
        fetchFeedbacks();
      }
    } catch (err) {
      console.error(err);
      setMessage(`Phản hồi yêu cầu #${response.id} thất bại`);
      setStatus('danger');
    } finally {
      setIsResponse(false);
      setTimeout(() => {
        handleCloseToast();
      }, 5000);
    }
  };

  return (
    <section className="container">
      <Toast
        message={message}
        status={status}
        handleCloseToast={handleCloseToast}
      />
      <p className="text-mainTitleColor text-mainTitle uppercase">
        Quản lý yêu cầu
      </p>

      <div className="grid grid-cols-12 mt-5 gap-5">
        <div className="col-span-6">
          <div className="grid grid-cols-12 gap-1">
            <div
              className="col-span-4 text-center py-3 border border-[#000]/[.2] bg-[#f5f5f5] font-medium cursor-pointer"
              data-status="pending"
              onClick={handleChangeFeedbackStatus}
            >
              Đang chờ...
            </div>

            <div
              className="col-span-4 text-center py-3 border border-[#000]/[.2] bg-[#17A2B8] text-white font-medium cursor-pointer"
              data-status="success"
              onClick={handleChangeFeedbackStatus}
            >
              Đã phản hồi
            </div>

            <div
              className="col-span-4 text-center py-3 border border-[#000]/[.2] bg-[#DC3545] text-white font-medium cursor-pointer"
              data-status="delete"
              onClick={handleChangeFeedbackStatus}
            >
              Đã xóa
            </div>
          </div>

          <ul className="w-full border border-[#000] max-h-96 min-h-24 overflow-y-auto mt-1 custom-scrollbar_1">
            {feedbacks
              .filter((feedback) => feedback.status == feedbackStatus)
              .map((feedback) => (
                <React.Fragment key={feedback.id}>
                  <li
                    className="w-full p-3 bg-white border border-b-[#000]/[.2] hover:bg-[#f5f5f5] cursor-pointer relative"
                    data-id={`${feedback.id}`}
                    onClick={handleChangeResponseId}
                  >
                    <div className="flex justify-between items-center italic text-sm text-slate-800">
                      <span>{feedback.email_customer}</span>
                      <span>
                        {new Date(feedback.createdAt).toLocaleDateString(
                          'en-GB',
                          {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            second: '2-digit',
                            minute: '2-digit',
                            hour: '2-digit',
                          }
                        )}
                      </span>
                    </div>
                    <span className="text-[18px] text-primaryColor font-medium block">
                      {feedback.feedbackName}
                    </span>
                    <span className="block pr-9">
                      <span className="font-medium">Nội dung:</span>{' '}
                      {feedback.feedbackContent}
                    </span>

                    {feedback.status === 'success' && (
                      <span className="block pr-9">
                        <span className="font-medium text-[#17A2B8] block mt-1">
                          Phản hồi:{' '}
                        </span>
                        {feedback.responseContent}
                      </span>
                    )}

                    {feedback.status === 'pending' && (
                      <span
                        className="text-red-600 hover:text-red-900 p-1.5 rounded-lg bg-red-200 inline-block absolute right-4 top-10"
                        onClick={() => handleDeleteFeedback(feedback.id)}
                      >
                        {isDeleted == feedback.id ? (
                          <span className="border-t-[3px] border-primaryColor rounded-full h-5 w-5 animate-spin block"></span>
                        ) : (
                          <FaTrashAlt className="h-5 w-5" />
                        )}
                      </span>
                    )}
                  </li>
                </React.Fragment>
              ))}
          </ul>
        </div>

        <div className="col-span-6 p-5 bg-white h-max shadow-md">
          {response.id !== null ? (
            feedbacks
              .filter((feedback) => feedback.id == response.id)
              .map((feedback, index) => (
                <form key={index} onSubmit={handleResponseFeedBack}>
                  <div className="flex justify-between items-center border-b-tabNavigate">
                    <div className="">
                      <p className="text-[32px] font-medium text-primaryColor">
                        {feedback.feedbackName}
                      </p>
                    </div>

                    <div className="border-l-tabNavigate px-5">
                      <p className="pb-0.5">Email: {feedback.email_customer}</p>
                      <p className="pb-0.5">
                        Họ và tên: {feedback.fullName_customer}
                      </p>
                      <p className="pb-0.5">
                        Số điện thoại: {feedback.phone_customer}
                      </p>
                      <p className="pb-0.5">
                        Thời gian:{' '}
                        {new Date(feedback.createdAt).toLocaleDateString(
                          'en-GB',
                          {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            second: '2-digit',
                            minute: '2-digit',
                            hour: '2-digit',
                          }
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="block">
                      <span className="font-medium">Nội dung:</span>{' '}
                      {feedback.feedbackContent}
                    </span>

                    <span className="block">
                      <span className="font-medium text-[#17A2B8] block mt-1">
                        Phản hồi:{' '}
                      </span>
                      <textarea
                        className="w-full outline-0 border mt-1 p-1"
                        placeholder="Nội dung phản hổi..."
                        rows={4}
                        value={response.responseContent}
                        onChange={handleChangeResponseContent}
                        required
                      />
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="uppercase px-5 py-2.5 w-full mt-3 bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider"
                  >
                    {isResponse ? (
                      <span className="border-t-[3px] border-[#ccc] rounded-full h-5 w-5 animate-spin block mx-auto"></span>
                    ) : (
                      'xuất bản'
                    )}
                  </button>
                </form>
              ))
          ) : (
            <p className="text-mainTitleColor text-[38px] transition-all relative overflow-hidden group w-max">
              Chọn 1 yêu cầu...
              <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-mainTitleColor transform -translate-x-full transition-all group-hover:translate-x-0"></span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackManagement;
