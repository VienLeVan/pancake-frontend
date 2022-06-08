import { Button, useWalletModal, ButtonProps } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useActiveHandle } from 'hooks/useEagerConnect.bmp'
import { useTranslation } from 'contexts/Localization'
import Trans from './Trans'

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const handleActive = useActiveHandle()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  const handleClick = () => {
    if (__NEZHA_BRIDGE__) {
      handleActive()
    } else {
      onPresentConnectModal()
    }
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children || <Trans>Connect Wallet</Trans>}
    </Button>
  )
}

export default ConnectWalletButton
