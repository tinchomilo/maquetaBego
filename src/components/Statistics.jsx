import React from 'react'

import graph from '../assets/images/Path 8.png'

export const Statistics = () => {
    return (
        <div className="statistics__container">
            <div className="statistics__title">
                <h4>Statistics</h4>
                <div className="statistics__save">
                    <div className="statistics__save-arrow">
                        <svg id="statistics__save-arrow-svg-1" width="34px" height="33px" viewBox="0 0 34 33" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
                            <defs>
                                <filter x="-96.4%" y="-103.8%" width="292.9%" height="307.7%" filterUnits="objectBoundingBox" id="filter-1">
                                    <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                    <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                                    <feMerge>
                                        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g id="Manager" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="My-fleet-projects-" transform="translate(-298.000000, -412.000000)" fill="#C1C7D0" fill-rule="nonzero">
                                    <g id="Statics" transform="translate(29.000000, 417.000000)">
                                        <g id="Group-3" transform="translate(267.000000, 0.000000)">
                                            <g id="Group-2" filter="url(#filter-1)" transform="translate(12.000000, 5.000000)">
                                                <path d="M12.6757812,7.36363636 L12.6757812,10.8560987 C12.6757812,11.1331841 12.434834,11.3586112 12.1386719,11.3586112 L1.61132812,11.3586112 C1.31516602,11.3586112 1.07421875,11.1331841 1.07421875,10.8560987 L1.07421875,7.36363636 L-8.8817842e-16,7.36363636 L-8.8817842e-16,10.8560987 C-8.8817842e-16,11.687355 0.722841797,12.3636364 1.61132812,12.3636364 L12.1386719,12.3636364 C13.0271582,12.3636364 13.75,11.687355 13.75,10.8560987 L13.75,7.36363636 L12.6757812,7.36363636 Z" id="Path"></path>
                                                <polygon id="Path" points="9.19560537 5.99344797 7.30898047 7.92586684 7.30898047 2.57571742e-14 6.31601999 2.57571742e-14 6.31601999 7.92586684 4.42939508 5.99344797 3.72727273 6.71261291 6.81250023 9.872728 9.89772773 6.71261291"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="statistics__save-little-arrow">
                        <svg width="6px" height="5px" viewBox="0 0 6 5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>12804120-2A32-44E7-8A23-916C9B209280</title>
                            <g id="Manager" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="My-fleet-projects-" transform="translate(-338.000000, -426.000000)" fill="#C1C7D0" fill-rule="nonzero">
                                    <g id="Statics" transform="translate(29.000000, 417.000000)">
                                        <g id="Group-3" transform="translate(267.000000, 0.000000)">
                                            <path d="M46.8903108,11.6162016 L43.3290676,9.0369824 C43.1828154,8.93142716 43,9.06451854 43,9.27562901 L43,14.4386567 C43,14.6497672 43.1828154,14.7828586 43.3290676,14.6773033 L46.8903108,12.0980841 C47.0365631,11.9878937 47.0365631,11.7217568 46.8903108,11.6162016 Z" id="Path" transform="translate(45.000000, 11.857143) rotate(90.000000) translate(-45.000000, -11.857143) "></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className="statistics__detail">
                <div className="statistics__detail-item-1">
                    <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Manager" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="My-fleet-projects-" transform="translate(-35.000000, -468.000000)" fill="#0364FF" fill-rule="nonzero">
                                <g id="Statics" transform="translate(29.000000, 417.000000)">
                                    <g id="menu" filter="url(#filter-1)" transform="translate(18.000000, 63.000000)">
                                        <path d="M16.8926554,0 L13.940678,0 C12.2272881,0 10.8333333,1.3939548 10.8333333,3.10734463 L10.8333333,6.05932203 C10.8333333,7.77271186 12.2272881,9.16666667 13.940678,9.16666667 L16.8926554,9.16666667 C18.6060452,9.16666667 20,7.77271186 20,6.05932203 L20,3.10734463 C20,1.3939548 18.6060452,0 16.8926554,0 Z M18.3333333,6.0042735 C18.3333333,6.82901709 17.6623504,7.5 16.8376068,7.5 L13.9957265,7.5 C13.1709829,7.5 12.5,6.82901709 12.5,6.0042735 L12.5,3.16239316 C12.5,2.33764957 13.1709829,1.66666667 13.9957265,1.66666667 L16.8376068,1.66666667 C17.6623504,1.66666667 18.3333333,2.33764957 18.3333333,3.16239316 L18.3333333,6.0042735 Z" id="Shape"></path>
                                        <path d="M6.05932203,0 L3.10734463,0 C1.3939548,0 0,1.3939548 0,3.10734463 L0,6.05932203 C0,7.77271186 1.3939548,9.16666667 3.10734463,9.16666667 L6.05932203,9.16666667 C7.77271186,9.16666667 9.16666667,7.77271186 9.16666667,6.05932203 L9.16666667,3.10734463 C9.16666667,1.3939548 7.77271186,0 6.05932203,0 Z M7.5,6.0042735 C7.5,6.82901709 6.82901709,7.5 6.0042735,7.5 L3.16239316,7.5 C2.33764957,7.5 1.66666667,6.82901709 1.66666667,6.0042735 L1.66666667,3.16239316 C1.66666667,2.33764957 2.33764957,1.66666667 3.16239316,1.66666667 L6.0042735,1.66666667 C6.82901709,1.66666667 7.5,2.33764957 7.5,3.16239316 L7.5,6.0042735 Z" id="Shape"></path>
                                        <path d="M6.05932203,10.8333333 L3.10734463,10.8333333 C1.3939548,10.8333333 0,12.2272881 0,13.940678 L0,16.8926554 C0,18.6060452 1.3939548,20 3.10734463,20 L6.05932203,20 C7.77271186,20 9.16666667,18.6060452 9.16666667,16.8926554 L9.16666667,13.940678 C9.16666667,12.2272881 7.77271186,10.8333333 6.05932203,10.8333333 Z M7.5,16.8376068 C7.5,17.6623504 6.82901709,18.3333333 6.0042735,18.3333333 L3.16239316,18.3333333 C2.33764957,18.3333333 1.66666667,17.6623504 1.66666667,16.8376068 L1.66666667,13.9957265 C1.66666667,13.1709829 2.33764957,12.5 3.16239316,12.5 L6.0042735,12.5 C6.82901709,12.5 7.5,13.1709829 7.5,13.9957265 L7.5,16.8376068 Z" id="Shape"></path>
                                        <path d="M19.2231638,16.1158192 C18.7941172,16.1158192 18.4463277,16.4636088 18.4463277,16.8926554 C18.4463277,17.7493503 17.7493503,18.4463277 16.8926554,18.4463277 L13.940678,18.4463277 C13.0839831,18.4463277 12.3870056,17.7493503 12.3870056,16.8926554 L12.3870056,13.940678 C12.3870056,13.0839831 13.0839831,12.3870056 13.940678,12.3870056 L16.8926554,12.3870056 C17.5104343,12.3870056 18.069601,12.7528566 18.3171787,13.3190537 C18.4890537,13.7121716 18.9471151,13.8914266 19.3401942,13.7195904 C19.7333121,13.5476766 19.9126059,13.089654 19.7407309,12.6965749 C19.2457698,11.5646857 18.1278249,10.8333333 16.8926554,10.8333333 L13.940678,10.8333333 C12.2272881,10.8333333 10.8333333,12.2272881 10.8333333,13.940678 L10.8333333,16.8926554 C10.8333333,18.6060452 12.2272881,20 13.940678,20 L16.8926554,20 C18.6060452,20 20,18.6060452 20,16.8926554 C20,16.4636088 19.6522105,16.1158192 19.2231638,16.1158192 Z" id="Path"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                <div className="statistics__detail-item-1-title">
                    <span>50</span>
                    <span>Total proyects</span>
                </div>
                </div>

                <div className="statistics__detail-item-2">
                    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>40F41919-9B73-4085-B7C9-9192F9FE30F7</title>
                        <g id="Manager" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="My-fleet-projects-" transform="translate(-210.000000, -480.000000)" fill="#0EE881" fill-rule="nonzero">
                                <g id="Statics" transform="translate(29.000000, 417.000000)">
                                    <g id="checked" transform="translate(181.000000, 63.000000)">
                                        <path d="M19.7833267,2.87979712 C19.4937056,2.59606881 19.0237828,2.59557994 18.7341617,2.87859376 L9.83277438,11.5608681 L6.62117976,8.14962274 C6.3436711,7.85502663 5.87447882,7.83592339 5.57274535,8.10727972 C5.27124259,8.37867365 5.25193965,8.8377532 5.52944831,9.13261254 L9.26414502,13.0992058 C9.40091907,13.244586 9.59233352,13.3290088 9.79416849,13.3331077 C9.79959023,13.3333333 9.80481972,13.3333333 9.81001075,13.3333333 C10.0061548,13.3333333 10.1948392,13.257146 10.3338434,13.1216934 L19.7818655,3.90607006 C20.0722172,3.62309384 20.0727171,3.16352543 19.7833267,2.87979712 Z" id="Path"></path>
                                        <path d="M19.2462109,9.24621094 C18.8298828,9.24621094 18.4924609,9.58363281 18.4924609,10 C18.4924609,14.6829297 14.6829297,18.4924609 10,18.4924609 C5.31734375,18.4924609 1.50753906,14.6829297 1.50753906,10 C1.50753906,5.31734375 5.31734375,1.50753906 10,1.50753906 C10.4163281,1.50753906 10.7537891,1.17011719 10.7537891,0.753789062 C10.7537891,0.337421875 10.4163281,0 10,0 C4.4859375,0 0,4.4859375 0,10 C0,15.5138281 4.4859375,20 10,20 C15.5138281,20 20,15.5138281 20,10 C20,9.58367188 19.6625781,9.24621094 19.2462109,9.24621094 Z" id="Path"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="statistics__detail-item-2-title">
                        <span>15</span>
                        <span>Completed</span>
                    </div>    
                </div>

                <div className="statistics__detail-item-4">
                    <svg width="18px" height="28px" viewBox="0 0 18 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>FEC933AA-E480-4121-A1F9-1F4C0DC63C9D</title>
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                <stop stop-color="#FFD200" offset="0%"></stop>
                                <stop stop-color="#FFBE00" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g id="Manager" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="My-fleet-projects-" transform="translate(-51.000000, -545.000000)" fill="url(#linearGradient-1)" fill-rule="nonzero">
                                <g id="Statics" transform="translate(29.000000, 417.000000)">
                                    <g id="flash" transform="translate(22.734375, 128.000000)">
                                        <path d="M16.2143897,9.41716071 C16.1204168,9.23432143 15.979485,9.142875 15.7915942,9.142875 L10.2482931,9.142875 L15.7446352,0.685714286 C15.8386082,0.548571429 15.8386082,0.365732143 15.7446352,0.228589286 C15.6506623,0.0914464286 15.5097305,0 15.3218397,0 L7.80549272,0 C7.61760194,0 7.47667009,0.0914464286 7.38269717,0.228589286 L0.336104688,13.942875 C0.242131771,14.0800179 0.242131771,14.2628571 0.336104688,14.4 C0.430077605,14.5371429 0.617968387,14.6285893 0.758900237,14.6285893 L5.59754206,14.6285893 L0.336104688,26.8343036 C0.242131771,27.0171429 0.336104688,27.2457321 0.52399547,27.382875 C0.570954403,27.4285714 0.66492732,27.4285714 0.758900237,27.4285714 C0.899832087,27.4285714 1.04076394,27.382875 1.13473685,27.2914286 L16.1674858,9.91998214 C16.2614037,9.78283929 16.3083626,9.6 16.2143897,9.41716071 Z M2.40306845,24.3657321 L6.72499686,14.3086071 C6.77195579,14.1714643 6.77195579,14.0343214 6.67803793,13.8971786 C6.58406501,13.8057321 6.44313316,13.7143393 6.30220131,13.7143393 L1.51051842,13.7143393 L8.08735642,0.914303571 L14.4762486,0.914303571 L8.93294752,9.37141071 C8.8389746,9.50855357 8.8389746,9.69139286 8.93294752,9.82853571 C9.02692044,9.96567857 9.16785229,10.057125 9.35574307,10.057125 L14.8051263,10.057125 L2.40306845,24.3657321 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="statistics__detail-item-4-title">
                        <span>10</span>
                        <span>In Progress</span>
                    </div>
                </div>

                <div className="statistics__detail-item-3">
                    <svg width="22px" height="23px" viewBox="0 0 22 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>BCD5BE1B-D202-406B-961E-7EF2CDC6F035</title>
                        <g id="Manager" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="My-fleet-projects-" transform="translate(-211.000000, -550.000000)" fill="#FF5252" fill-rule="nonzero">
                                <g id="Statics" transform="translate(29.000000, 417.000000)">
                                    <g id="Group" transform="translate(182.000000, 133.000000)">
                                        <path d="M10.6551725,0.746219784 C4.77949179,0.746219784 0,5.52571918 0,11.4013923 C0,17.2770654 4.7794994,22.0565648 10.6551725,22.0565648 C16.5308456,22.0565648 21.310345,17.2770654 21.310345,11.4013923 C21.310345,5.52571918 16.5308532,0.746219784 10.6551725,0.746219784 Z M10.6551725,2.26838728 C15.708213,2.26838728 19.7881775,6.34835939 19.7881775,11.4013923 C19.7881775,16.4544252 15.7082054,20.5343973 10.6551725,20.5343973 C5.6021396,20.5343973 1.5221675,16.4544252 1.5221675,11.4013923 C1.5221675,6.34835939 5.60213199,2.26838728 10.6551725,2.26838728 Z" id="Shape"></path>
                                        <path d="M10.6432844,5.30222537 C10.2235335,5.30887755 9.88834136,5.65404323 9.89408875,6.07380603 L9.89408875,11.4013923 C9.8941281,11.6032307 9.97433254,11.7967896 10.1170635,11.9395013 L13.8838344,15.7062722 C14.0747217,15.9051207 14.3581985,15.9852304 14.624928,15.9157032 C14.8916576,15.846176 15.0999562,15.6378774 15.1694834,15.3711478 C15.2390106,15.1044183 15.1589009,14.8209415 14.9600525,14.6300542 L11.4162562,11.0862579 L11.4162562,6.07380603 C11.4190729,5.86808578 11.3384911,5.66998708 11.1928716,5.52464712 C11.047252,5.37930716 10.8489988,5.29910623 10.6432844,5.30222537 L10.6432844,5.30222537 Z" id="Path"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="statistics__detail-item-3-title">
                        <span>2</span>
                        <span>Delayed</span>
                    </div>
                </div>                
            </div>
            <div className="statistics__graph">
                <div className="statistics__graph-periods">
                    <span>Day</span>
                    <span>Week</span>
                    <span><span className="statistics__graph-periods-active">Mo</span>nth</span>
                    <span>Year</span>
                </div>
                <div className="statistics__graph-main">                    
                    <span><sup>$ </sup>13,543</span>
                    <div className="statistics__graph-main-img">
                        <div className="statistics__graph-main-img-details" ></div>
                        <hr width="1" size="115"/>
                        <img src={ graph } width="323" alt="graph img"/>
                    </div>
                </div>
                <div className="statistics__graph-months">
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                </div>
            </div>
        </div>
    )
}
