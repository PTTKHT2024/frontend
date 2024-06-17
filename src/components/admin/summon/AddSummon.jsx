import React, { useEffect, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import { createMarkup } from '../../utils/UtilsFunction';
import { createSummon } from '../../utils/SummonApi';
import Toast from '../../common/Toast';

const AddSummon = () => {
  const [summonBlog, setSummonBlog] = useState({
    title: '',
    content: null,
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [isPreview, setIsPreview] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const html = convertToHTML({
      entityToHTML: (entity, originalText) => {
        if (entity.type === 'IMAGE') {
          const { src } = entity.data;
          return `<div style="text-align: center;"><img src="${src}" alt="Image" style="display: inline-block; max-width: 100%; margin: 10px 0;" /></div>`;
        }
        return originalText;
      },
    })(editorState.getCurrentContent());
    setSummonBlog((prev) => ({ ...prev, content: html }));
  }, [editorState]);

  const handlePreviewToggle = () => {
    setIsPreview(!isPreview);
  };

  const CustomToolbar = () => (
    <div
      className={`rdw-option-wrapper bg-[#56BACC] text-white ${
        isPreview ? 'text-sm mb-2' : 'text-xs'
      }`}
      onClick={handlePreviewToggle}
    >
      {isPreview ? 'Edit' : 'Preview'}
    </div>
  );

  const toolbarCustomButtons = [<CustomToolbar key="preview" />];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!!summonBlog.content) {
      setMessage('Chưa nhập đầy đủ thông tin.');
      setStatus('danger');

      setTimeout(() => {
        handleCloseToast();
      }, 3000);
      return;
    }

    const dataJSON = localStorage.getItem('data');
    const data = JSON.parse(dataJSON);
    const accessToken = data.access_token;
    try {
      const res = await createSummon(summonBlog, accessToken);
      if (res.status === 201) {
        setMessage('Đăng bài thành công');
        setStatus('success');
      }
    } catch (err) {
      console.error('Error create summon blog', err);
      setMessage('Đăng bài thất bại');
      setStatus('danger');
    }

    setTimeout(() => {
      handleCloseToast();
    }, 3000);
  };

  const handleCloseToast = () => {
    setMessage('');
    setStatus('');
  };

  return (
    <section>
      <Toast
        message={message}
        status={status}
        handleCloseToast={handleCloseToast}
      />

      <form onSubmit={handleSubmit}>
        <div className="flex items-center h-[48px] justify-between">
          <input
            type="text"
            required
            className="border p-2 text-xl text-mainTitleColor rounded-sm w-[85%]"
            placeholder="Tiêu đề"
            value={summonBlog.title}
            onChange={(e) =>
              setSummonBlog({ ...summonBlog, title: e.target.value })
            }
          />
          <button
            type="submit"
            className="uppercase h-full px-5 whitespace-nowrap rounded-sm bg-[#604CC3] hover:bg-[#604CC3]/[.8] transition-all duration-200 ease-in font-bold text-white text-[15px] tracking-wider"
          >
            xuất bản
          </button>
        </div>

        <div className="h-max w-full border py-3 px-4 rounded-sm mt-5">
          {isPreview ? (
            <>
              <CustomToolbar />
              <div dangerouslySetInnerHTML={createMarkup(summonBlog.content)} />
            </>
          ) : (
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              placeholder="Nội dung"
              toolbarClassName="border-tabNavigate/[.4] rounded-sm sticky top-[10px] bg-[#f5f5f5] z-10"
              editorClassName=""
              toolbarCustomButtons={toolbarCustomButtons}
            />
          )}
        </div>
      </form>
    </section>
  );
};

export default AddSummon;
