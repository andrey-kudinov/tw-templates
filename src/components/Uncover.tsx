import Link from "next/link";

export const Uncover = () => (
  <>
    <div className='w-full h-screen relative p-16'>
      <header className='relative z-20 w-full flex justify-between items-center h-20'>
        <a href='#' className='text-3xl text-gray-100 leading-tight'>
          Polina
          <br />
          Popova
        </a>

        <ul className='flex text-sm lowercase italic'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li className='ml-4'>
            <a href='#'>About</a>
          </li>
          <li className='ml-4'>
            <a href='#'>Services</a>
          </li>
          <li className='ml-4'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </header>

      <div className='relative z-20 flex flex-wrap h-full -mt-20 pt-32'>
        <div className='w-full md:w-1/2 h-full'>
          <img
            src='https://images.unsplash.com/photo-1514315384763-ba401779410f?w=1400'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='w-full md:w-1/2 p-10 flex justify-center items-center'>
          <div className='max-w-xs'>
            <h1 className='text-6xl mb-4 leading-none'>Welcome</h1>
            <p className='mb-8 text-sm leading-relaxed'>
              Ad fugiat in dolore velit fugiat mollit dolore eu sunt tempor anim reprehenderit. Ad fugiat in dolore
              velit fugiat mollit dolore eu sunt tempor anim reprehenderit.
            </p>
            <a href='#' className='bg-gray-900 text-white uppercase font-sans text-xs px-4 py-3'>
              Learn more <i className='ml-1 fa fa-chevron-right'></i>
            </a>
          </div>
        </div>
      </div>

      <div className='z-10 w-1/2 h-full bg-gray-900 absolute top-0 left-0 -ml-20'></div>

      <div className='z-10 w-1 h-64 bg-gray-100 absolute bottom-0 left-0 ml-5'></div>
    </div>

    <div className='w-full py-40 text-center flex items-center justify-center bg-gray-100'>
      <h2 className='text-4xl max-w-2xl leading-tight'>
        In dolore fugiat laborum fugiat aliquip velit in nisi commodo culpa minim.
      </h2>
    </div>

    <div className='relative z-20 flex justify-center items-center flex-wrap h-screen overflow-hidden'>
      <div className='relative z-20 w-full flex flex-wrap justify-around max-w-4xl'>
        <div className='w-full md:w-64'>
          <div className='relative mb-10'>
            <img
              src='https://images.unsplash.com/photo-1499914485622-a88fac536970?w=640'
              className='w-64 h-64 object-cover'
            />

            <div className='absolute bottom-0 left-0 w-full flex justify-center items-start'>
              <div className='w-1 h-16 bg-gray-900 -mb-6'></div>
            </div>
          </div>

          <h3 className='text-xs uppercase tracking-tighter text-center font-sans'>Pinterest Management</h3>
        </div>

        <div className='w-full md:w-64 md:mt-16'>
          <div className='relative mb-10'>
            <img
              src='https://images.unsplash.com/photo-1462078563783-650e23af549d?w=640'
              className='w-64 h-64 object-cover'
            />

            <div className='absolute bottom-0 left-0 w-full flex justify-center items-start'>
              <div className='w-1 h-16 bg-gray-900 -mb-6'></div>
            </div>
          </div>

          <h3 className='text-xs uppercase tracking-tighter text-center font-sans'>Instagram Strategy</h3>
        </div>

        <div className='w-full md:w-64 md:mt-32'>
          <div className='relative mb-10'>
            <img
              src='https://images.unsplash.com/photo-1553531580-652231dae097?w=640'
              className='w-64 h-64 object-cover'
            />

            <div className='absolute bottom-0 left-0 w-full flex justify-center items-start'>
              <div className='w-1 h-16 bg-gray-900 -mb-6'></div>
            </div>
          </div>

          <h3 className='text-xs uppercase tracking-tighter text-center font-sans'>Brand Design</h3>
        </div>
      </div>

      <div className='z-10 w-1/2 h-full bg-gray-400 absolute top-0 right-0 -mr-20'></div>

      <div className='z-10 w-1 h-64 bg-gray-100 absolute bottom-0 right-0 mr-5'></div>
    </div>

    <div className='w-full py-40'>
      <div className='flex flex-wrap max-w-3xl mx-auto'>
        <div className='w-3/12 pr-6'>
          <h2 className='text-5xl text-gray-900 leading-tight lowercase text-right font-bold'>
            About
            <br />
            us
          </h2>
        </div>

        <div className='w-9/12'>
          <p className='opacity-75 leading-relaxed mb-8'>
            Cupidatat non sed exercitation deserunt nisi dolor in magna ullamco aute commodo labore laborum consequat
            laboris ut minim ad in non anim. Cupidatat non sed exercitation deserunt nisi dolor in magna ullamco aute
            commodo labore.
          </p>
          <a href='#' className='bg-gray-900 text-white uppercase font-sans text-xs px-4 py-3'>
            Learn more <i className='ml-1 fa fa-chevron-right'></i>
          </a>
        </div>
      </div>
    </div>

    <div className='w-full py-24 relative'>
      <div className='bg-gray-300 max-w-3xl text-center relative z-20 mx-auto py-6'>
        <h3 className='text-2xl mb-4'>Subscribe</h3>
        <p className='text-sm mb-6'>Enim commodo nostrud in sunt nulla cillum tempor.</p>

        <form className='flex w-full max-w-xs mx-auto'>
          <input type='' className='h-12 flex-1 py-2 px-4' placeholder='Email address' />
          <button className='h-12 w-24 bg-gray-900 text-white text-sm uppercase ml-2'>Sign up</button>
        </form>
      </div>

      <img
        src='https://images.unsplash.com/photo-1554412664-6a4d8f640b3b?w=1800'
        className='absolute top-0 left-0 w-full h-full object-cover z-10'
      />
    </div>

    <div className='w-full py-32 px-24 flex flex-wrap justify-around relative'>
      <img
        src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=640'
        className='w-64 h-64 object-cover mb-12 md:mb-0'
      />
      <img
        src='https://images.unsplash.com/photo-1533525801715-1f3764669187?w=640'
        className='w-64 h-64 object-cover mb-12 md:mb-0'
      />
      <img
        src='https://images.unsplash.com/photo-1521335751419-603f61523713?w=640'
        className='w-64 h-64 object-cover mb-12 md:mb-0'
      />
      <img
        src='https://images.unsplash.com/photo-1495564103921-67412af57da3?w=640'
        className='w-64 h-64 object-cover'
      />

      <h4 className='text-6xl text-gray-800 font-bold tracking-tighter absolute top-0 left-0 mt-12 ml-20'>insta</h4>
      <h4 className='text-6xl text-gray-800 font-bold tracking-tighter absolute bottom-0 right-0 mb-16 mr-20'>gram</h4>
    </div>

    <div className='bg-gray-900 w-full py-20 px-24 text-center text-gray-100'>
      <p>&copy; Copyright 2023 | Polina Popova</p>
    </div>
  </>
);
