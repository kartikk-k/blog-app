import { FC } from "react"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string,
    fill?: string
}

export const MediumLogo: FC<IconProps> = ({ className, fill, ...props }) => {
    return (
        <svg {...props} className={className ? className : "h-6"} viewBox="0 0 600 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 46.3C90 71.3 69.9 91.6 45 91.6C20.1 91.6 0 71.3 0 46.3C0 21.3 20.1 1 45 1C69.9 1 90 21.3 90 46.3ZM139.3 46.3C139.3 69.8 129.2 88.9 116.8 88.9C104.4 88.9 94.3 69.8 94.3 46.3C94.3 22.8 104.4 3.69998 116.8 3.69998C129.2 3.69998 139.3 22.7 139.3 46.3ZM159.5 46.3C159.5 67.4 156 84.5 151.6 84.5C147.2 84.5 143.7 67.4 143.7 46.3C143.7 25.2 147.2 8.09998 151.6 8.09998C156 8.09998 159.5 25.2 159.5 46.3ZM283.6 4.89999H283.7V3.89999H258.1L234.4 59.8L210.6 4H183V5H183.1C187.8 6.1 190.1 7.59999 190.1 13.3V79.7C190.1 85.4 187.7 86.9 183.1 88H183V89H201.7V88H201.6C196.9 86.9 194.6 85.4 194.6 79.7V17.2L225.1 89H226.8L258.2 15.2V81.4C257.8 85.9 255.5 87.3 251.2 88.2H251.1V89.2H283.7V88.2H283.6C279.4 87.2 277 85.9 276.6 81.4V13.4C276.6 7.59999 279 5.99999 283.6 4.89999ZM298.5 48.9C299 37 303.3 28.4 310.5 28.2C312.7 28.2 314.6 29 316 30.4C319.1 33.4 320.5 39.6 320.3 48.9H298.5ZM298.2 52.2H336.4V52C336.3 42.9 333.7 35.8 328.6 30.9C324.2 26.7 317.7 24.4 310.8 24.4H310.6C307 24.4 302.7 25.3 299.6 26.8C296.1 28.4 293 30.9 290.4 34.1C286.2 39.3 283.7 46.2 283.1 54.1C283.1 54.3 283.1 54.6 283 54.8C283 55 283 55.2 283 55.5C282.9 56.6 282.9 57.7 282.9 58.8C283.3 76.6 292.9 90.8 310 90.8C325 90.8 333.7 79.9 335.9 65.2L334.8 64.8C331 72.7 324.1 77.5 316.3 76.9C305.6 76.1 297.4 65.3 298.2 52.2ZM379.5 76.3C378.2 79.3 375.6 80.9 372.1 80.9C368.6 80.9 365.4 78.5 363.1 74.1C360.7 69.4 359.4 62.8 359.4 54.9C359.4 38.6 364.5 28 372.4 28C375.7 28 378.3 29.6 379.5 32.5V76.3ZM404.9 88C400.2 86.9 397.9 85.3 397.9 79.3V0L369.5 8.39999V9.39999H369.7C373.6 9.09999 376.3 9.6 377.8 11C379 12.1 379.6 13.8 379.6 16.2V27.1C376.8 25.3 373.5 24.4 369.4 24.4C361.2 24.4 353.7 27.8 348.3 34.1C342.7 40.6 339.7 49.5 339.7 59.9C339.7 78.4 348.8 90.8 362.3 90.8C370.2 90.8 376.6 86.5 379.5 79.1V88.9H405V87.9L404.9 88ZM429.2 10.8C429.2 4.99999 424.9 0.699982 419.1 0.699982C413.4 0.699982 408.9 5.09999 408.9 10.8C408.9 16.5 413.4 20.9 419.1 20.9C424.8 20.9 429.2 16.6 429.2 10.8ZM435.9 88C431.2 86.9 428.9 85.3 428.9 79.3V24.7L403.4 32V33H403.6C409.1 33.5 410.6 35.4 410.6 41.8V89H436V88H435.9ZM501.1 88C496.4 86.9 494.1 85.3 494.1 79.3V24.7L469.9 31.8V32.8H470C474.5 33.3 475.8 35.3 475.8 41.7V76.2C474.3 79.2 471.5 80.9 468.1 81.1C462.6 81.1 459.5 77.4 459.5 70.6V24.7L434 32V33H434.2C439.7 33.5 441.2 35.4 441.2 41.8V71C441.2 73 441.4 75.1 441.7 77.1L442.2 79.1C444.4 86.8 450 90.9 458.8 90.9C466.3 90.9 472.9 86.3 475.8 79V89.1H501.3V88.1L501.1 88ZM600 89V88H599.9C594.8 86.8 592.9 84.6 592.9 80.1V43C592.9 31.4 586.4 24.5 575.5 24.5C567.6 24.5 560.9 29.1 558.3 36.2C556.3 28.6 550.4 24.5 541.6 24.5C533.9 24.5 527.9 28.5 525.4 35.4V24.7L499.9 31.7V32.7H500.1C505.5 33.2 507.1 35.1 507.1 41.4V89H530.9V88H530.8C526.8 87.1 525.5 85.3 525.5 80.9V38.3C526.6 35.8 528.7 32.8 533 32.8C538.3 32.8 541 36.5 541 43.7V89H564.8V88H564.7C560.7 87.1 559.4 85.3 559.4 80.9V43C559.4 41.6 559.3 40.2 559.1 38.8C560.2 36.1 562.5 32.9 566.9 32.9C572.3 32.9 574.9 36.5 574.9 43.8V89.1H600V89Z" fill={fill ? fill : "#000000"} />
        </svg>
    )
}
export const MediumLogoDark: FC<IconProps> = ({ className, fill, ...props }) => {
    return (
        <svg {...props} className={className ? className : "h-6"} viewBox="0 0 600 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 46.3C90 71.3 69.9 91.6 45 91.6C20.1 91.6 0 71.3 0 46.3C0 21.3 20.1 1 45 1C69.9 1 90 21.3 90 46.3ZM139.3 46.3C139.3 69.8 129.2 88.9 116.8 88.9C104.4 88.9 94.3 69.8 94.3 46.3C94.3 22.8 104.4 3.69998 116.8 3.69998C129.2 3.69998 139.3 22.7 139.3 46.3ZM159.5 46.3C159.5 67.4 156 84.5 151.6 84.5C147.2 84.5 143.7 67.4 143.7 46.3C143.7 25.2 147.2 8.09998 151.6 8.09998C156 8.09998 159.5 25.2 159.5 46.3ZM283.6 4.89999H283.7V3.89999H258.1L234.4 59.8L210.6 4H183V5H183.1C187.8 6.1 190.1 7.59999 190.1 13.3V79.7C190.1 85.4 187.7 86.9 183.1 88H183V89H201.7V88H201.6C196.9 86.9 194.6 85.4 194.6 79.7V17.2L225.1 89H226.8L258.2 15.2V81.4C257.8 85.9 255.5 87.3 251.2 88.2H251.1V89.2H283.7V88.2H283.6C279.4 87.2 277 85.9 276.6 81.4V13.4C276.6 7.59999 279 5.99999 283.6 4.89999ZM298.5 48.9C299 37 303.3 28.4 310.5 28.2C312.7 28.2 314.6 29 316 30.4C319.1 33.4 320.5 39.6 320.3 48.9H298.5ZM298.2 52.2H336.4V52C336.3 42.9 333.7 35.8 328.6 30.9C324.2 26.7 317.7 24.4 310.8 24.4H310.6C307 24.4 302.7 25.3 299.6 26.8C296.1 28.4 293 30.9 290.4 34.1C286.2 39.3 283.7 46.2 283.1 54.1C283.1 54.3 283.1 54.6 283 54.8C283 55 283 55.2 283 55.5C282.9 56.6 282.9 57.7 282.9 58.8C283.3 76.6 292.9 90.8 310 90.8C325 90.8 333.7 79.9 335.9 65.2L334.8 64.8C331 72.7 324.1 77.5 316.3 76.9C305.6 76.1 297.4 65.3 298.2 52.2ZM379.5 76.3C378.2 79.3 375.6 80.9 372.1 80.9C368.6 80.9 365.4 78.5 363.1 74.1C360.7 69.4 359.4 62.8 359.4 54.9C359.4 38.6 364.5 28 372.4 28C375.7 28 378.3 29.6 379.5 32.5V76.3ZM404.9 88C400.2 86.9 397.9 85.3 397.9 79.3V0L369.5 8.39999V9.39999H369.7C373.6 9.09999 376.3 9.6 377.8 11C379 12.1 379.6 13.8 379.6 16.2V27.1C376.8 25.3 373.5 24.4 369.4 24.4C361.2 24.4 353.7 27.8 348.3 34.1C342.7 40.6 339.7 49.5 339.7 59.9C339.7 78.4 348.8 90.8 362.3 90.8C370.2 90.8 376.6 86.5 379.5 79.1V88.9H405V87.9L404.9 88ZM429.2 10.8C429.2 4.99999 424.9 0.699982 419.1 0.699982C413.4 0.699982 408.9 5.09999 408.9 10.8C408.9 16.5 413.4 20.9 419.1 20.9C424.8 20.9 429.2 16.6 429.2 10.8ZM435.9 88C431.2 86.9 428.9 85.3 428.9 79.3V24.7L403.4 32V33H403.6C409.1 33.5 410.6 35.4 410.6 41.8V89H436V88H435.9ZM501.1 88C496.4 86.9 494.1 85.3 494.1 79.3V24.7L469.9 31.8V32.8H470C474.5 33.3 475.8 35.3 475.8 41.7V76.2C474.3 79.2 471.5 80.9 468.1 81.1C462.6 81.1 459.5 77.4 459.5 70.6V24.7L434 32V33H434.2C439.7 33.5 441.2 35.4 441.2 41.8V71C441.2 73 441.4 75.1 441.7 77.1L442.2 79.1C444.4 86.8 450 90.9 458.8 90.9C466.3 90.9 472.9 86.3 475.8 79V89.1H501.3V88.1L501.1 88ZM600 89V88H599.9C594.8 86.8 592.9 84.6 592.9 80.1V43C592.9 31.4 586.4 24.5 575.5 24.5C567.6 24.5 560.9 29.1 558.3 36.2C556.3 28.6 550.4 24.5 541.6 24.5C533.9 24.5 527.9 28.5 525.4 35.4V24.7L499.9 31.7V32.7H500.1C505.5 33.2 507.1 35.1 507.1 41.4V89H530.9V88H530.8C526.8 87.1 525.5 85.3 525.5 80.9V38.3C526.6 35.8 528.7 32.8 533 32.8C538.3 32.8 541 36.5 541 43.7V89H564.8V88H564.7C560.7 87.1 559.4 85.3 559.4 80.9V43C559.4 41.6 559.3 40.2 559.1 38.8C560.2 36.1 562.5 32.9 566.9 32.9C572.3 32.9 574.9 36.5 574.9 43.8V89.1H600V89Z" fill={fill ? fill : "#FFFFFF"} />
        </svg>
    )
}