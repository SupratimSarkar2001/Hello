type PageProps = {
 children: React.ReactNode,
 modal: React.ReactNode,
}
export default function BoardLayout({children, modal}: PageProps) {
 return(
  <>
  {children}
  {modal}
  </>
 )
}