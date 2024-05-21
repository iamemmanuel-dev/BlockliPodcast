import { useState } from 'react'

const useTabs = TABS => {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const onTabSwitch = tab => setActiveTab(tab)

  return { onTabSwitch, activeTab }
}

export default useTabs
