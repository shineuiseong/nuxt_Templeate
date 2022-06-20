
const MenuItems = {

  users:[
    {
      title: 'AllUser',
      group: 'users',
      name:'전체 유저 확인',
      href:'/admin/aaa',
      status: false
    },
    {
      title: 'PaidUser',
      group: 'users',
      name:'유료회원 관리',
      href:'/admin/aaa',
      status: false
    },
    {
      title: 'ReportUser',
      group: 'users',
      name:'신고 회원 관리',
      href:'/admin/aaa',
      status: false
    },
    {
      title: 'BlacklistUser',
      group: 'users',
      name:'블랙유저 관리',
      href:'/admin/aaa',
      status: false
    },
  ],

  content:[
    {
      title: 'AllContentList',
      group: 'content',
      name:'전체 3D 콘텐츠 목록',
      href:'/'
    },
    {
      title: 'ReportContent',
      group: 'content',
      name:'신고 콘텐츠 관리',
      href:'/'
    },
    {
      title: 'BlackContent',
      group: 'content',
      name:'블랙 콘텐츠 관리',
      href:'/'
    },
    {
      title: 'PostContent',
      group: 'content',
      name:'게시용 콘텐츠 관리',
      href:'/'
    },
  ],
  tag:[
    {
      title: 'ContentTag',
      group: 'Tag',
      name:'콘텐츠 태그 관리',
      href:'/'
    },
    {
      title: 'Incongruity',
      group: 'Tag',
      name:'부적합 대상 태그 관리',
      href:'/'
    },
    {
      title: 'BlackTagList',
      group: 'Tag',
      name:'블랙 태그 리스트',
      href:'/'
    },
  ]
}

export default MenuItems;
