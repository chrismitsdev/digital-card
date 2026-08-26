type WavePatternProps = {
  className?: string
  fill: string
}

function WavePattern({className, fill}: WavePatternProps) {
  return (
    <svg
      className={className}
      aria-label='Wavy background pattern'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
      aria-hidden='true'
    >
      <path
        fill={fill}
        fillOpacity='1'
        d='M0,32L80,64C160,96,320,160,480,154.7C640,149,800,75,960,53.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
      />
    </svg>
  )
}

export {WavePattern}
