import React from "react";
import c from "./Works.module.css"
import todo from "../../assets/todoList.png"
import diet from "../../assets/diet.png"
import simple from "../../assets/simple.png"
import tweet from "../../assets/tweet.png"
import pointer from "../../assets/pointer.ico"
import scroll from "../../assets/scroll.ico"

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
            <div className={c.container}>

                <div className={c.work_todo}>
                    <div id={'img'}>
                        <div>
                            <a className={'text-decoration-none'} href="https://yuri1011.github.io/tasklist/"
                               target='_blank'>
                                <span>
                                    <img src={pointer} alt="pointer"/>
                                </span>
                                <p className={c.click}>click tittle</p>
                                <p className={c.title_todo}>
                                    To-do list
                                </p>
                            </a>
                        </div>
                        <div>
                            <img src={todo} alt='image_todo_list' className={'borderWorksImg card-img w-75 rounded'}/>
                        </div>
                    </div>
                    <div id={'img'}>
                        <div>
                            <a className={'text-decoration-none'} href="https://yuri1011.github.io/Diet/"
                               target='_blank'>
                                <p className={c.title_todo}>Diet</p>
                            </a>
                        </div>
                        <div>
                            <img src={diet} alt='image_todo_list' className={'borderWorksImg card-img w-75 rounded'}/>
                        </div>
                    </div>
                    <div id={'img'}>
                        <div>
                            <a className={'text-decoration-none'} href="https://yuri1011.github.io/tweet/"
                               target='_blank'>
                                <p className={c.title_todo}>Tweet</p>
                            </a>
                        </div>
                        <div>
                            <img src={tweet} alt='image_todo_list' className={'borderWorksImg card-img w-75 rounded'}/>
                        </div>
                    </div>
                    <div id={'img'}>
                        <div>
                            <a className={'text-decoration-none'} href="https://yuri1011.github.io/Simple/"
                               target='_blank'>
                                <p className={c.title_todo}>Simple</p>
                            </a>
                        </div>
                        <div>
                            <img src={simple} alt='image_todo_list' className={'borderWorksImg card-img w-75 rounded'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={c.scroll}>
                <img src={scroll} alt="scroll-pointer"/>
               <div>leaf through my works</div>
            </div>
        </section>
    )
}
