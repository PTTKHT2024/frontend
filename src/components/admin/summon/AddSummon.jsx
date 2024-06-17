import React, { useEffect, useState } from 'react';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { createMarkup } from '../../utils/UtilsFunction';
import Toast from '../../common/Toast';
import { convertToHTML } from 'draft-convert';

const AddSummon = () => {
  const [summonBlog, setSummonBlog] = useState({
    title: '',
    content: '',
  });
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    let html = convertToHTML({
      entityToHTML: (entity) => {
        if (entity.type === 'IMAGE') {
          const { src } = entity.data;
          return `<div style="text-align: center;"><img src="${src}" alt="Image" style="display: inline-block; max-width: 100%; margin: 10px 0;" /></div>`;
        }
      },
    })(editorState.getCurrentContent());
    setSummonBlog({ ...summonBlog, content: html });
  }, [editorState]);

  return (
    <section>
      <div className="flex items-center">
        <input
          type="text"
          className="border w-full p-2 text-xl text-mainTitleColor rounded-sm"
          placeholder="Tiêu đề"
        />
      </div>

      <div className="h-max w-full border py-3 px-4 rounded-sm mt-5">
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          placeholder="Nội dung"
          toolbarClassName="border-tabNavigate/[.4] rounded-sm sticky top-[10px] bg-[#f5f5f5] z-10"
          editorClassName=""
        />
      </div>
    </section>
  );
};

export default AddSummon;
