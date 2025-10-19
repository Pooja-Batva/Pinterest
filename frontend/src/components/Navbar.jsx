import React from 'react'

function Navbar() {
    return (
        <div className='flex'>
            <div className='h-screen flex flex-col p-4 justify-between'>
                <div className='flex flex-col h-3/5 justify-between p-4'>
                    {/* pinterest logo */}
                    <svg aria-hidden="true" aria-label="" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M7.54 23.15q-.2-2.05.26-3.93L9 14.04a7 7 0 0 1-.35-2.07c0-1.68.81-2.88 2.09-2.88.88 0 1.53.62 1.53 1.8q0 .57-.23 1.28l-.52 1.72q-.15.5-.15.92c0 1.2.91 1.87 2.08 1.87 2.09 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.12-5.05-5.12-3.36 0-5.49 2.19-5.49 5.24 0 1.22.38 2.36 1.11 3.14-.24.41-.5.48-.88.48-1.2 0-2.34-1.69-2.34-4 0-4 3.2-7.17 7.68-7.17 4.7 0 7.66 3.29 7.66 7.33s-2.88 7.15-5.98 7.15a3.8 3.8 0 0 1-3.06-1.48l-.62 2.5a11 11 0 0 1-1.62 3.67A11.98 11.98 0 0 0 24 12a11.99 11.99 0 1 0-24 0 12 12 0 0 0 7.54 11.15" fill='red'></path></svg>

                    {/* home icon */}
                    <svg aria-hidden="true" aria-label="" class="gUZ U9O Uvi" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M4.6 22.73A107 107 0 0 0 11 23h2.22c2.43-.04 4.6-.16 6.18-.27A3.9 3.9 0 0 0 23 18.8v-8.46a4 4 0 0 0-1.34-3L14.4.93a3.63 3.63 0 0 0-4.82 0L2.34 7.36A4 4 0 0 0 1 10.35v8.46a3.9 3.9 0 0 0 3.6 3.92M13.08 2.4l7.25 6.44a2 2 0 0 1 .67 1.5v8.46a1.9 1.9 0 0 1-1.74 1.92q-1.39.11-3.26.19V16a4 4 0 0 0-8 0v4.92q-1.87-.08-3.26-.19A1.9 1.9 0 0 1 3 18.81v-8.46a2 2 0 0 1 .67-1.5l7.25-6.44a1.63 1.63 0 0 1 2.16 0M13.12 21h-2.24a1 1 0 0 1-.88-1v-4a2 2 0 1 1 4 0v4a1 1 0 0 1-.88 1"></path></svg> 

                    {/* explore icon */}
                    <svg aria-hidden="true" aria-label="" class="gUZ U9O Uvi" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.42 7.24a3 3 0 0 0-2.18 2.18L5.7 15.57a2.25 2.25 0 0 0 2.73 2.73l6.15-1.54a3 3 0 0 0 2.18-2.18l1.54-6.15a2.25 2.25 0 0 0-2.73-2.73zm6.94.7-1.54 6.15a1 1 0 0 1-.73.73l-6.15 1.54a.25.25 0 0 1-.3-.3L9.18 9.9a1 1 0 0 1 .73-.73l6.15-1.54a.25.25 0 0 1 .3.3M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"></path></svg>

                    {/* add icon */}
                    <svg aria-hidden="true" aria-label="" class="gUZ U9O Uvi" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M11 11H6v2h5v5h2v-5h5v-2h-5V6h-2zM5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm16 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2"></path></svg>

                    {/* notification icon */}
                    <svg aria-hidden="true" aria-label="" class="gUZ U9O Uvi" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16 19h8v-2h-.34a3.15 3.15 0 0 1-3.12-2.76l-.8-6.41a7.8 7.8 0 0 0-15.48 0l-.8 6.41A3.15 3.15 0 0 1 .34 17H0v2h8v1h.02a3.4 3.4 0 0 0 3.38 3h1.2a3.4 3.4 0 0 0 3.38-3H16zm1.75-10.92.8 6.4c.12.95.5 1.81 1.04 2.52H4.4c.55-.7.92-1.57 1.04-2.51l.8-6.41a5.8 5.8 0 0 1 11.5 0M13.4 19c.33 0 .6.27.6.6 0 .77-.63 1.4-1.4 1.4h-1.2a1.4 1.4 0 0 1-1.4-1.4c0-.33.27-.6.6-.6z"></path></svg>

                    {/* messages icon */}
                    <svg aria-hidden="true" aria-label="" class="Hn_ gUZ U9O Uvi" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M7 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-5 10c1.8 0 3.5-.41 5-1.15l3.69.65A2 2 0 0 0 23 20.7l-.65-3.7A11.5 11.5 0 1 0 12 23.5m8.55-7.36-.28.58.76 4.31-4.31-.76-.58.28q-1.89.93-4.14.95a9.5 9.5 0 1 1 8.55-5.36"></path></svg>
                </div>

                <div className='p-4'>
                    {/* settings icon */}
                    <svg aria-hidden="true" aria-label="" class="gUZ U9O Uvi" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m3 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.13-10.29A2 2 0 0 0 14.7.31a12 12 0 0 0-5.4 0c-.73.17-1.26.74-1.43 1.4l-.58 2.14-2.14-.57a2 2 0 0 0-1.93.54 12 12 0 0 0-2.7 4.67c-.22.72.01 1.46.5 1.95L2.59 12l-1.57 1.56a2 2 0 0 0-.5 1.95 12 12 0 0 0 2.7 4.68c.51.54 1.27.72 1.93.54l2.14-.58.58 2.14c.17.67.7 1.24 1.43 1.4a12 12 0 0 0 5.4 0 2 2 0 0 0 1.43-1.4l.58-2.14 2.13.58c.67.18 1.43 0 1.94-.55a12 12 0 0 0 2.7-4.67 2 2 0 0 0-.5-1.94L21.4 12l1.57-1.56c.49-.5.71-1.23.5-1.95a12 12 0 0 0-2.7-4.67 2 2 0 0 0-1.93-.54l-2.14.57zm-6.34.54a10 10 0 0 1 4.42 0l.56 2.12a2 2 0 0 0 2.45 1.41l2.13-.57a10 10 0 0 1 2.2 3.83L20 10.59a2 2 0 0 0 0 2.83l1.55 1.55a10 10 0 0 1-2.2 3.82l-2.13-.57a2 2 0 0 0-2.44 1.42l-.57 2.12a10 10 0 0 1-4.42 0l-.57-2.12a2 2 0 0 0-2.45-1.42l-2.12.57a10 10 0 0 1-2.2-3.82L4 13.42a2 2 0 0 0 0-2.83L2.45 9.03a10 10 0 0 1 2.2-3.82l2.13.57a2 2 0 0 0 2.44-1.41z"></path></svg>
                </div>
            </div>
            <div className='w-full h-20 flex p-4 justify-between'>
                <label htmlFor="search-input" className="sr-only" />
                <svg aria-label="Search icon" className="" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M17.33 18.74a10 10 0 1 1 1.41-1.41l4.47 4.47-1.41 1.41zM11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16" fill='gray'></path></svg>
                <input
                    type="text"
                    className='w-full mr-4 bg-gray-200 rounded-2xl p-4 focus:ring-blue-700'
                    placeholder=' Search'
                />
                <div className='flex justify-center items-center gap-2'>
                    {/* profile icon */}
                    <svg width="35" height="35" viewBox="0 0 50 50">
                        <circle cx="25" cy="25" r="25" fill="#0283C8" />
                        <text x="50%" y="50%" text-anchor="middle" dy=".35em" font-family="Arial" font-size="24" fill="white">P</text>
                    </svg>

                    {/* dropdown icon */}
                    <svg aria-hidden="true" aria-label="" class="gUZ U9O BNH" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M23.7 8.7 12 20.42.3 8.71l1.4-1.42L12 17.6 22.3 7.3z"></path></svg>
                </div>

            </div>


        </div>
    )
}

export default Navbar