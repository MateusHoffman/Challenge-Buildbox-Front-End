import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import * as Icon from 'react-icons/fa';
import { toast } from 'react-toastify';
import { PostStructure } from '../../interfaces/post';

import Header from '../../components/Header';

import uploadFile from '../../assets/icon-add-image.png';

import * as S from './styles';

toast.configure({
  autoClose: 2500,
});

const Dashboard: React.FC = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [edit, setEdit] = useState(false);
  const [postId, setPostId] = useState(0);
  const [readyPost, setReadyPost] = useState(false);
  const [inputError, setInputError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [posts, setPosts] = useState<PostStructure[]>(() => {
    const arrPostsStorage = localStorage.getItem('posts');
    if (arrPostsStorage) return JSON.parse(arrPostsStorage);
    return [];
  });

  const handleCleanPost = (): void => {
    setName('');
    setMessage('');
    setAvatar('');
  };

  const handlePost = useCallback((): void => {
    if (name !== '' && message !== '') return setReadyPost(true);
    if (name === '' || message === '') return setReadyPost(false);
    return setReadyPost(false);
  }, [name, message]);

  const handleAddPost = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setInputError('');
    setMessageError('');
    if (!name || !message) {
      if (!name) setInputError('Campo obrigatório');
      if (!message) setMessageError('Campo obrigatório');
      return;
    }
    const newPost = {
      id: Math.random() * 100,
      avatar,
      name,
      message,
    } as PostStructure;
    try {
      setPosts([...posts, newPost]);
      toast.success('Publicação bem sucedida');
      handleCleanPost();
    } catch (error) {
      toast.success('Publicação mal sucedida');
    }
  };

  const handleRemovePost = (id: number): void => {
    try {
      const newArrPosts = posts.filter((i) => i.id !== id);
      setPosts(newArrPosts);
      toast.success('Removida com sucesso');
    } catch (error) {
      toast.success('Erro ao remover');
    }
  };

  const handleSetEditPost = (post: PostStructure): void => {
    setEdit(!edit);
    if (!edit) {
      setAvatar(post.avatar);
      setName(post.name);
      setMessage(post.message);
      setPostId(post.id);
    }
    if (edit) {
      handleCleanPost();
      setPostId(0);
    }
  };

  const handleEditPost = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setInputError('');
    setMessageError('');
    if (!name || !message) {
      if (!name) setInputError('Campo obrigatório');
      if (!message) setMessageError('Campo obrigatório');
      return;
    }

    const newPosts = posts.filter((post) => {
      if (post.id === postId) {
        post.avatar = avatar;
        post.name = name;
        post.message = message;
      }

      return post;
    });

    try {
      setPosts(newPosts);
      toast.success('Publicação editada com sucesso');
      handleCleanPost();
      setPostId(0);
      setEdit(false);
    } catch (error) {
      toast.error('Erro ao editar a publicação');
    }
  };

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    handlePost();
  }, [name, message, handlePost]);

  return (
    <>
      <Header />
      <S.ContainerDashboard>
        <S.FormAddPost readyPost={readyPost}>
          <S.ContainerAvatar>
            {!avatar ? (
              <S.Avatar>
                <label htmlFor="avatar">
                  <img src={uploadFile} alt="file" />
                  <input
                    type="file"
                    id="avatar"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e: any): void => {
                      setAvatar(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                </label>
              </S.Avatar>
            ) : (
              <S.AvatarEdit>
                <img src={avatar} alt="Uploaded img" />
                <Icon.FaEdit onClick={() => setAvatar('')} />
              </S.AvatarEdit>
            )}
          </S.ContainerAvatar>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {inputError && <S.InputError>{inputError}</S.InputError>}

          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {messageError && <S.InputError>{messageError}</S.InputError>}

          <S.BtnsPostEditDiscard>
            <S.BtnDiscardChanges onClick={handleCleanPost}>
              Descartar
            </S.BtnDiscardChanges>
            {edit ? (
              <button type="button" onClick={(e) => handleEditPost(e)}>
                Salvar alteração
              </button>
            ) : (
              <button type="button" onClick={(e) => handleAddPost(e)}>
                Publicar
              </button>
            )}
          </S.BtnsPostEditDiscard>
        </S.FormAddPost>

        <S.TitlePosts>
          <h5>Feeds</h5>
        </S.TitlePosts>

        {posts.map((post) => (
          <S.Post key={post.id}>
            <div>
              {post.avatar ? (
                <img src={post.avatar} alt={post.name} />
              ) : (
                <S.NoAvatar src={uploadFile} alt={post.name} />
              )}
            </div>

            <div>
              <p>{post.message}</p>
              <div>
                <span>Enviado por</span>
                <strong>{post.name}</strong>
              </div>
            </div>

            <div>
              <Icon.FaEdit onClick={() => handleSetEditPost(post)} />
              <Icon.FaWindowClose onClick={() => handleRemovePost(post.id)} />
            </div>
          </S.Post>
          // <S.Post key={post.id}>

          //   <S.PostContent>
          //     <S.PostText>
          // <p>{post.message}</p>
          // <span>Enviado por</span>
          // <strong>{post.name}</strong>
          //     </S.PostText>
          //   </S.PostContent>

          // </S.Post>
        ))}
      </S.ContainerDashboard>
    </>
  );
};

export default Dashboard;
