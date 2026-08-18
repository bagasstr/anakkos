import Navbar from '@/components/shared/Navbar'

const layoutHomepage = ({ children }: LayoutProps<'/'>) => {
  return (
    <div className=''>
      <Navbar />
      {children}
    </div>
  )
}
export default layoutHomepage
