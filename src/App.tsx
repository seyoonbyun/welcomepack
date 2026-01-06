import { Route, Switch } from 'wouter'
import { ThemeProvider } from './components/theme-provider'
import DetailPage from './pages/DetailPage'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="bni-theme">
      <Switch>
        <Route path="/" component={DetailPage} />
        <Route path="/detail" component={DetailPage} />
        <Route>
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-muted-foreground">404 - Page Not Found</p>
          </div>
        </Route>
      </Switch>
      <Toaster />
    </ThemeProvider>
  )
}

export default App

