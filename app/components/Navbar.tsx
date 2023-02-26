import React from 'react'

const items: { label: string; page: string; }[] = [
    {
        label: 'Úvod',
        page: 'home'
    },
    {
        label: 'O mně',
        page: 'about'
    },
    {
        label: 'Dovednosti',
        page: 'skills'
    },
    {
        label: 'Projekty',
        page: 'projects'
    },
    {
        label: 'Kontakt',
        page: 'contact'
    },
]

function Navbar() {
  return (
    <div>Navbar</div>
  )
}

export default Navbar