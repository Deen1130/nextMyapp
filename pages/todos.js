import { useState } from 'react'
import axios from 'axios'
import styles from '../styles/Todos.module.css'

/*
安裝
npm install json-server -g
json-server --port 3500 --watch data/db.json
*/

const url = 'http://localhost:3500/tasks'

// 獲取服務器端道具
export const getServerSideProps = async () => {
  const { data } = await axios.get(url)
  return {
    props: {
      tasks: data || [],
    },
  }
}

export default function Home(props) {
  const [tasks, setTasks] = useState(props.tasks)
  const [content, setContent] = useState('') // 任務內容
  const [editContent, setEditContent] = useState('') // 編輯內容的ID

  const addTask = async (e) => {
    e.preventDefault()
    try {
      if (editContent) {
        const response = await axios.put(url + '/' + editContent.id, { ...editContent, content: content })
        setTasks((prev) => prev.map((data) => data.id == editContent.id ? response.data : data))
        setContent('')
        setEditContent('')
      } else {
        const task = {
          id: new Date().getTime(),
          content: content,
          completed: false
        }
        const response = await axios.post(url, task)
        setTasks((prev) => [...prev, response.data])
        setContent('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const editTask = (payload) => {
    setContent(payload.content)
    setEditContent(payload)
  }

  const updateTask = async (payload) => {
    try {
      const response = await axios.put(url + '/' + payload.id, { ...payload, completed: payload.completed = !payload.completed })
      console.log(response.data)
      setTasks((prev) => prev.map((data) => data.id == payload.id ? response.data : data))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (payload) => {
    try {
      const response = await axios.delete(url + '/' + payload.id)
      setTasks((prev) => prev.filter((data) => data.id !== payload.id))
      console.log('刪除', response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Todos</h1>
      <div className={styles.container}>
        <form onSubmit={addTask} className={styles.form_container}>
          <input
            className={styles.input}
            type='text'
            placeholder='請輸入任務名稱'
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <button type='submit' className={styles.submit_btn}>
            {editContent ? '編輯' : '增加'}
          </button>
        </form>
        {tasks.map((data) => (
          <div className={styles.task_container} key={data.id}>
            <input
              type='checkbox'
              className={styles.check_box}
              checked={data.completed}
              onChange={() => updateTask(data)}
            />
            <p
              className={
                data.completed
                  ? styles.task_text + ' ' + styles.line_through
                  : styles.task_text
              }
            >
              {data.content}
            </p>
            <button
              onClick={() => editTask(data)}
              className={styles.edit_task}
            >
              &#9998;
            </button>
            <button
              onClick={() => deleteTask(data)}
              className={styles.remove_task}
            >
              &#10006;
            </button>
          </div>
        ))}
        {tasks.length === 0 && <h2 className={styles.no_tasks}>無任務</h2>}
      </div>
    </main>
  )
}


