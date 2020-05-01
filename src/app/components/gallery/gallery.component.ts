import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  fotos1 = [
    { path: 'https://i.ibb.co/vd9QfcV/179.jpg', show: false },
    { path: 'https://i.ibb.co/q0krQ5L/181.jpg', show: false },
    { path: 'https://i.ibb.co/CW0m3rP/01.jpg', show: false },
    { path: 'https://i.ibb.co/MfC9wBh/15.jpg', show: false },
    { path: 'https://i.ibb.co/BrCqwsN/03.jpg', show: false },
    { path: 'https://i.ibb.co/S37XhMz/04.jpg', show: false },
    { path: 'https://i.ibb.co/jG7L3v1/05.jpg', show: false },
    { path: 'https://i.ibb.co/KjxGXvz/06.jpg', show: false },
    { path: 'https://i.ibb.co/YBR3Csd/07.jpg', show: false },
    { path: 'https://i.ibb.co/8XSrhXD/08.jpg', show: false },
    { path: 'https://i.ibb.co/RcFjkH8/09.png', show: false },
    { path: 'https://i.ibb.co/5FMF4BM/11.jpg', show: false },
    { path: 'https://i.ibb.co/56FgQ8p/12.jpg', show: false },
    { path: 'https://i.ibb.co/9prGp7s/13.jpg', show: false },
    { path: 'https://i.ibb.co/sP8r2JH/02.jpg', show: false },
    { path: 'https://i.ibb.co/RcTDR8C/17.jpg', show: false },
    { path: 'https://i.ibb.co/MDmtgpg/19.jpg', show: false },
    { path: 'https://i.ibb.co/g7N1tpw/20.jpg', show: false },
    { path: 'https://i.ibb.co/Pxx74mm/21.jpg', show: false },
    { path: 'https://i.ibb.co/TB2j9Pb/22.jpg', show: false },
    { path: 'https://i.ibb.co/LrPYcXd/24.jpg', show: false },
    { path: 'https://i.ibb.co/T4QzMfQ/25.jpg', show: false },
    { path: 'https://i.ibb.co/MM0HkGp/26.jpg', show: false },
    { path: 'https://i.ibb.co/TcPPKtb/27.jpg', show: false },

  ];

  fotos2 = [
    { path: 'https://i.ibb.co/tLCxZyd/28.jpg', show: false },
    { path: 'https://i.ibb.co/r0x2hfb/29.jpg', show: false },
    { path: 'https://i.ibb.co/xC2dpKh/30.jpg', show: false },
    { path: 'https://i.ibb.co/gDcghfx/31.jpg', show: false },
    { path: 'https://i.ibb.co/8PHGfLn/32.jpg', show: false },
    { path: 'https://i.ibb.co/KrBYnZD/33.jpg', show: false },
    { path: 'https://i.ibb.co/X2ZTGG6/34.jpg', show: false },
    { path: 'https://i.ibb.co/XDw8qSp/35.jpg', show: false },
    { path: 'https://i.ibb.co/6g372tQ/36.jpg', show: false },
    { path: 'https://i.ibb.co/P5XNgW3/37.jpg', show: false },
    { path: 'https://i.ibb.co/bHPb6LQ/39.jpg', show: false },
    { path: 'https://i.ibb.co/1L6sR52/40.jpg', show: false },
    { path: 'https://i.ibb.co/S64yTPH/41.jpg', show: false },
    { path: 'https://i.ibb.co/c2yTLT0/42.jpg', show: false },
    { path: 'https://i.ibb.co/sRpKMpM/43.jpg', show: false },
    { path: 'https://i.ibb.co/68pJ01s/44.jpg', show: false },
    { path: 'https://i.ibb.co/HtBmtxf/45.jpg', show: false },
    { path: 'https://i.ibb.co/0qMBZk5/46.jpg', show: false },
    { path: 'https://i.ibb.co/FYCyjzg/47.jpg', show: false },
    { path: 'https://i.ibb.co/CBMNjn7/48.jpg', show: false },
    { path: 'https://i.ibb.co/9pKBTNt/49.jpg', show: false },
    { path: 'https://i.ibb.co/NKLcvfz/50.jpg', show: false },
    { path: 'https://i.ibb.co/2d8779N/51.jpg', show: false },
    { path: 'https://i.ibb.co/H7GM6JC/52.jpg', show: false },
  ];

  fotos3 = [

    { path: 'https://i.ibb.co/4ZLZfzG/53.jpg', show: false },
    { path: 'https://i.ibb.co/ysRk17d/54.jpg', show: false },
    { path: 'https://i.ibb.co/27d204R/55.jpg', show: false },
    { path: 'https://i.ibb.co/cY731R3/56.jpg', show: false },
    { path: 'https://i.ibb.co/Z1Jh6WP/57.jpg', show: false },
    { path: 'https://i.ibb.co/NTqXznr/58.jpg', show: false },
    { path: 'https://i.ibb.co/pzw6y56/59.jpg', show: false },
    { path: 'https://i.ibb.co/FHb1J3t/61.jpg', show: false },
    { path: 'https://i.ibb.co/wRs4F4L/63.jpg', show: false },
    { path: 'https://i.ibb.co/w0Vw3tP/64.jpg', show: false },
    { path: 'https://i.ibb.co/T4Rw4Q5/65.jpg', show: false },
    { path: 'https://i.ibb.co/pQL3gJv/66.jpg', show: false },
    { path: 'https://i.ibb.co/w4wFGf9/67.jpg', show: false },
    { path: 'https://i.ibb.co/cQvFPMN/68.jpg', show: false },
    { path: 'https://i.ibb.co/QCDhbbb/69.jpg', show: false },
    { path: 'https://i.ibb.co/GTqmVMm/70.jpg', show: false },
    { path: 'https://i.ibb.co/6mMpYrb/71.jpg', show: false },
    { path: 'https://i.ibb.co/Zf7r8SK/72.jpg', show: false },
    { path: 'https://i.ibb.co/vwpRXQ2/73.jpg', show: false },
    { path: 'https://i.ibb.co/KLZSR9v/74.jpg', show: false },
    { path: 'https://i.ibb.co/prpmszL/75.jpg', show: false },
    { path: 'https://i.ibb.co/GFMgRFc/76.jpg', show: false },
    { path: 'https://i.ibb.co/Fxtkjqm/77.jpg', show: false },
    { path: 'https://i.ibb.co/fY2ZYDF/78.jpg', show: false },
  ];

  fotos4 = [
    { path: 'https://i.ibb.co/vzmzhmm/79.jpg', show: false },
    { path: 'https://i.ibb.co/fkgcxZV/80.jpg', show: false },
    { path: 'https://i.ibb.co/P9DSRKG/81.jpg', show: false },
    { path: 'https://i.ibb.co/1nRZ4zz/82.jpg', show: false },
    { path: 'https://i.ibb.co/ckHXkzp/83.jpg', show: false },
    { path: 'https://i.ibb.co/44Yr50k/84.jpg', show: false },
    { path: 'https://i.ibb.co/Qd0BJwN/85.jpg', show: false },
    { path: 'https://i.ibb.co/sq2DwbG/86.jpg', show: false },
    { path: 'https://i.ibb.co/DW9KWth/87.jpg', show: false },
    { path: 'https://i.ibb.co/NND9TRp/88.jpg', show: false },
    { path: 'https://i.ibb.co/wK2HJwz/89.jpg', show: false },
    { path: 'https://i.ibb.co/Z2pLP17/91.jpg', show: false },
    { path: 'https://i.ibb.co/8sN0NFt/92.jpg', show: false },
    { path: 'https://i.ibb.co/ThLn6z9/93.jpg', show: false },
    { path: 'https://i.ibb.co/R39JHHd/94.jpg', show: false },
    { path: 'https://i.ibb.co/9Ywr8Jx/95.jpg', show: false },
    { path: 'https://i.ibb.co/gRCvW5H/97.jpg', show: false },
    { path: 'https://i.ibb.co/YTzf6Dz/98.jpg', show: false },
    { path: 'https://i.ibb.co/Mhdf8KN/99.jpg', show: false },
    { path: 'https://i.ibb.co/2FMvXkz/100.jpg', shown: false },
    { path: 'https://i.ibb.co/sqj34SJ/101.jpg', shown: false },
    { path: 'https://i.ibb.co/54FgVpw/102.jpg', shown: false },
    { path: 'https://i.ibb.co/tXhp5ZZ/103.jpg', shown: false },
    { path: 'https://i.ibb.co/1JKxVwV/104.jpg', shown: false },

  ];

  fotos5 = [

    { path: 'https://i.ibb.co/c659s2d/105.jpg', show: false },
    { path: 'https://i.ibb.co/M24fBYw/106.jpg', show: false },
    { path: 'https://i.ibb.co/gvPWrTW/107.jpg', show: false },
    { path: 'https://i.ibb.co/Qbw21C9/108.jpg', show: false },
    { path: 'https://i.ibb.co/GdxVg3v/109.jpg', show: false },
    { path: 'https://i.ibb.co/9pY8KRv/110.jpg', show: false },
    { path: 'https://i.ibb.co/Fq0Wb5R/111.jpg', show: false },
    { path: 'https://i.ibb.co/wchQYkB/112.jpg', show: false },
    { path: 'https://i.ibb.co/drktwLD/114.jpg', show: false },
    { path: 'https://i.ibb.co/q9FzBbP/116.jpg', show: false },
    { path: 'https://i.ibb.co/ZV0XSyz/117.jpg', show: false },
    { path: 'https://i.ibb.co/hFRRBZX/118.jpg', show: false },
    { path: 'https://i.ibb.co/QYxn9G6/119.jpg', show: false },
    { path: 'https://i.ibb.co/Pw4yyzY/120.jpg', show: false },
    { path: 'https://i.ibb.co/41xtpSh/121.jpg', show: false },
    { path: 'https://i.ibb.co/RhZctfy/122.jpg', show: false },
    { path: 'https://i.ibb.co/6XHSPHR/123.jpg', show: false },
    { path: 'https://i.ibb.co/2M6ST9W/124.jpg', show: false },
    { path: 'https://i.ibb.co/XFTz6zy/125.jpg', show: false },
    { path: 'https://i.ibb.co/SJFk8Lm/126.jpg', show: false },
    { path: 'https://i.ibb.co/zFXNswr/128.jpg', show: false },
    { path: 'https://i.ibb.co/zJ65yWX/129.jpg', show: false },
    { path: 'https://i.ibb.co/5TyFJ3g/130.jpg', show: false },
    { path: 'https://i.ibb.co/wM9fSMt/131.jpg', show: false },
  ];

  fotos6 = [
    { path: 'https://i.ibb.co/5M8dRqn/133.jpg', show: false },
    { path: 'https://i.ibb.co/tHr8NtZ/134.jpg', show: false },
    { path: 'https://i.ibb.co/6yp6gky/135.jpg', show: false },
    { path: 'https://i.ibb.co/VxPN2Bp/136.jpg', show: false },
    { path: 'https://i.ibb.co/hLSsyrT/137.jpg', show: false },
    { path: 'https://i.ibb.co/XDf85VT/138.jpg', show: false },
    { path: 'https://i.ibb.co/gmsZmL3/140.jpg', show: false },
    { path: 'https://i.ibb.co/FVWwCJN/141.jpg', show: false },
    { path: 'https://i.ibb.co/kQ69JpS/142.jpg', show: false },
    { path: 'https://i.ibb.co/9nrNRYB/143.jpg', show: false },
    { path: 'https://i.ibb.co/ZWHyY0w/144.jpg', show: false },
    { path: 'https://i.ibb.co/wM69xQ2/145.jpg', show: false },
    { path: 'https://i.ibb.co/jG0SyJ4/146.jpg', show: false },
    { path: 'https://i.ibb.co/ZgMw1X1/147.jpg', show: false },
    { path: 'https://i.ibb.co/qr2ftgY/148.jpg', show: false },
    { path: 'https://i.ibb.co/bKgKCpr/150.jpg', show: false },
    { path: 'https://i.ibb.co/12yY1j6/151.jpg', show: false },
    { path: 'https://i.ibb.co/zh3JwjG/152.jpg', show: false },
    { path: 'https://i.ibb.co/K5Cnr6w/153.jpg', show: false },
    { path: 'https://i.ibb.co/QP8BDCB/154.jpg', show: false },
    { path: 'https://i.ibb.co/pQ5WYSK/155.jpg', show: false },
    { path: 'https://i.ibb.co/WHqQgw0/156.jpg', show: false },
    { path: 'https://i.ibb.co/6HWcrfb/158.jpg', show: false },
    { path: 'https://i.ibb.co/xgSM3bS/159.jpg', show: false },
  ];


  fotos7 = [
    { path: 'https://i.ibb.co/SB2H3Rp/160.jpg', show: false },
    { path: 'https://i.ibb.co/t80FCQK/161.jpg', show: false },
    { path: 'https://i.ibb.co/R9Jvm4Z/162.jpg', show: false },
    { path: 'https://i.ibb.co/ZBhm295/163.jpg', show: false },
    { path: 'https://i.ibb.co/RSDsWFM/164.jpg', show: false },
    { path: 'https://i.ibb.co/HN0w5Jw/165.jpg', show: false },
    { path: 'https://i.ibb.co/kKVsgRV/166.jpg', show: false },
    { path: 'https://i.ibb.co/0YSwHZt/167.jpg', show: false },
    { path: 'https://i.ibb.co/ZNtR0cP/168.jpg', show: false },
    { path: 'https://i.ibb.co/cDmb798/170.jpg', show: false },
    { path: 'https://i.ibb.co/WF375xR/171.jpg', show: false },
    { path: 'https://i.ibb.co/PxJXzsY/172.jpg', show: false },
    { path: 'https://i.ibb.co/YQJKPsF/173.jpg', show: false },
    { path: 'https://i.ibb.co/ZTGt86z/174.jpg', show: false },
    { path: 'https://i.ibb.co/vq5Gzcb/175.jpg', show: false },
    { path: 'https://i.ibb.co/b7NXCV1/176.jpg', show: false },
    { path: 'https://i.ibb.co/MhbXPB1/177.jpg', show: false },
    { path: 'https://i.ibb.co/qRrk19G/178.jpg', show: false },
    { path: 'https://i.ibb.co/QXbfgfh/180.jpg', show: false },

  ];

  // get totalImagesShown(): number {
  //   return (this.fotos.filter(imageItem => imageItem.show) || []).length;
  // }
  constructor() { }

  ngOnInit() {
  }


  arriba() {
    window.scroll(0, 0);
  }


}
