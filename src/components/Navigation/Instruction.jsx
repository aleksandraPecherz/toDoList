import React from 'react'

const Instruction =() => (
<div className="instruction">
          <div className="instructionContent">
            <p>
              This site was made to manage tasks in current year. You may add a
              New task by cklick on "<span className="title">Add new task</span>
              ". Every task is displayed as mini square with description. <br />
              When you klick on
              <span className="icon-resize-small"></span> the square is
              resizing, and you are able to see full description of task. If you
              woud like to minimize the square just klick on
              <span className="icon-resize-full"></span>. <br /> All the tasks
              that are not done already will be visible in the section "
              <span className="title">Things to do</span>". Whenever you open a
              task, you can freely edit it as you wish by klick on
              <span className="icon-cog-outline"></span> You can save all the
              changes by klick on <span className="icon-floppy"></span>. Also if
              you dont want the task you can delete it by klicking on
              <span className="icon-trash-empty"></span> When you do the task
              you can assign it as "Done" by klicking on
              <span className="icon-check"></span>. If you do this the task will
              move to section: "<span className="title">Things done</span>". The
              tasks that are over due and those wich deadline is coming to the
              end, are pulsing on the screen. <br /> In the section "
              <span className="title">Things done</span>" are all tasks that you
              verfied as "DONE". Also you can delete them by klick on
              <span className="icon-trash-empty"></span>. Also if you think that
              task is not finished or you klick "DONE" by mistake you can
              reloacte the task back again to main section "
              <span className="title">Things to do</span>" By klick on
              <span className="icon-back"> </span>.
            </p>
          </div>
        </div>
)

export default Instruction 