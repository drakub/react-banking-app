import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {

  const loggedIn = { firstName: "Job", lastName: "Draku", email:"info@account.com"}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            subtext="Access and manage your account transactions efficiently"
            user={loggedIn?.firstName || "Guest"}
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 500.50 }, { currentBalance: 1200 }]}
      />
    </section>
  )
}

export default Home