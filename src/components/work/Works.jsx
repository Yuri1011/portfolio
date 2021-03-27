import React from "react";
import c from "./Works.module.css"
import todo from "../../assets/todoList.png"

export function Works() {


    return (
        <section id='work' className={c.wrapperWorks}>
            <div className={c.title}>
                <div>
                    <h2 className={c.portfolio}>Portfolio</h2>
                </div>
                <div className={c.minTitle}>
                    <div>
                        <p>My Works</p>
                    </div>
                    <div>
                        <span className={c.portfolioSpan}></span>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={c.work_todo}>
                    <a className='text-decoration-none' href="https://yuri1011.github.io/tasklist/" target='_blank'>
                        <p className={c.title_todo}>
                            To-do list
                        </p>
                        <img src={todo} alt='image_todo_list' className='borderWorksImg card-img w-25 rounded'/>
                    </a>
                </div>
            </div>
        </section>
    )
}