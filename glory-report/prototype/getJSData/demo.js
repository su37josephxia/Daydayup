window.__NUXT__ = (function (
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r
  ) {
    return {
      layout: "default",
      data: [{}],
      fetch: [],
      error: b,
      state: {
        view: {
          activityIndex: {
            activityList: [],
            pageInfo: { hasNextPage: a, endCursor: e },
            afterPosition: e,
            activityListIsLoading: c,
            activityListIsError: a,
            userActivityList: [],
            placeholder: e,
            actionType: {
              FETCH: "@\u002Fview\u002Factivity-index\u002FFETCH",
              FETCH_RECOMMEND_LIST:
                "@\u002Fview\u002Factivity-index\u002FFETCH_RECOMMEND_LIST",
              RESET_ACTIVITY_LIST:
                "@\u002Fview\u002Factivity-index\u002FRESET_ACTIVITY_LIST",
              FETCH_USER_ACTIVITY_LIST:
                "@\u002Fview\u002Factivity-index\u002FFETCH_USER_ACTIVITY_LIST",
              FETCH_NEW_COUNT:
                "@\u002Fview\u002Factivity-index\u002FFETCH_NEW_COUNT",
              DELETE_ACTIVITY:
                "@\u002Fview\u002Factivity-index\u002FDELETE_ACTIVITY",
              TOGGLE_FOLLOW_USER:
                "@\u002Fview\u002Factivity-index\u002FTOGGLE_FOLLOW_USER",
              FETCH_ENTRY_COMMENT_LIST:
                "@\u002Fview\u002Factivity-index\u002FFETCH_ENTRY_COMMENT_LIST",
              UPDATE_LIST_LOADING:
                "@\u002Fview\u002Factivity-index\u002FUPDATE_LIST_LOADING",
              RESET: "@\u002Fview\u002Factivity-index\u002FRESET",
            },
            hotList: {
              list: [],
              after: e,
              loading: a,
              hasNextPage: a,
              actionType: {
                UPDATE_STATE:
                  "@\u002Fview\u002Factivity-index\u002Fhot-list\u002FUPDATE_STATE",
                FETCH_MORE:
                  "@\u002Fview\u002Factivity-index\u002Fhot-list\u002FFETCH_MORE",
                FETCH:
                  "@\u002Fview\u002Factivity-index\u002Fhot-list\u002FFETCH",
                RESET:
                  "@\u002Fview\u002Factivity-index\u002Fhot-list\u002FRESET",
              },
            },
            sidebar: {
              bannerList: [],
              actionType: {
                RESET:
                  "@\u002Fview\u002Factivity-index\u002Fsidebar\u002FRESET",
                UPDATE_STATE:
                  "@\u002Fview\u002Factivity-index\u002Fsidebar\u002FUPDATE_STATE",
                FETCH_BANNER:
                  "@\u002Fview\u002Factivity-index\u002Fsidebar\u002FFETCH_BANNER",
              },
              recommend: {
                pageSize: g,
                page: d,
                total: d,
                pointer: b,
                lastPointer: b,
                list: [],
                loading: a,
                error: b,
                canPrev: c,
                canNext: c,
                linkList: [],
                lastFetchOnServer: a,
                actionType: {
                  UPDATE:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Frecommend-topic-list\u002FUPDATE",
                  FETCH:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Frecommend-topic-list\u002FFETCH",
                  FORCE_FETCH:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Frecommend-topic-list\u002FFORCE_FETCH",
                  FETCH_MORE:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Frecommend-topic-list\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Frecommend-topic-list\u002FRESET",
                },
                after: d,
              },
              followed: {
                pageSize: g,
                page: d,
                total: d,
                pointer: b,
                lastPointer: b,
                list: [],
                loading: a,
                error: b,
                canPrev: c,
                canNext: c,
                linkList: [],
                lastFetchOnServer: a,
                actionType: {
                  UPDATE:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Ffollowed-topic-list\u002FUPDATE",
                  FETCH:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Ffollowed-topic-list\u002FFETCH",
                  FORCE_FETCH:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Ffollowed-topic-list\u002FFORCE_FETCH",
                  FETCH_MORE:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Ffollowed-topic-list\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Ffollowed-topic-list\u002FRESET",
                },
                after: d,
              },
              recommendPin: {
                list: [],
                after: e,
                loading: a,
                hasNextPage: c,
                actionType: {
                  UPDATE_STATE:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Frecommend-pin-list\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Frecommend-pin-list\u002FFETCH_MORE",
                  FETCH:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Frecommend-pin-list\u002FFETCH",
                  RESET:
                    "@\u002Fview\u002Factivity-index\u002Fsidebar\u002Frecommend-pin-list\u002FRESET",
                },
              },
            },
            topicPinList: {
              pageSize: g,
              page: h,
              total: d,
              pointer: b,
              lastPointer: b,
              list: [],
              loading: a,
              error: b,
              canPrev: c,
              canNext: c,
              linkList: [],
              lastFetchOnServer: a,
              actionType: {
                UPDATE:
                  "@\u002Fview\u002Factivity-index\u002Ftopic-pin-list\u002FUPDATE",
                FETCH:
                  "@\u002Fview\u002Factivity-index\u002Ftopic-pin-list\u002FFETCH",
                FORCE_FETCH:
                  "@\u002Fview\u002Factivity-index\u002Ftopic-pin-list\u002FFORCE_FETCH",
                FETCH_MORE:
                  "@\u002Fview\u002Factivity-index\u002Ftopic-pin-list\u002FFETCH_MORE",
                RESET:
                  "@\u002Fview\u002Factivity-index\u002Ftopic-pin-list\u002FRESET",
              },
              topicId: e,
              navList: [
                { type: j, name: j, title: "推荐 ", id: j },
                { type: k, name: k, title: "热门 ", id: k },
                { type: m, name: m, title: "关注 ", id: m },
                {
                  type: i,
                  name: "opensource",
                  title: "开源推荐 ",
                  id: "5c09ea2b092dcb42c740fe73",
                },
                {
                  type: i,
                  name: "recruitment",
                  title: "内推招聘",
                  id: "5abb61e1092dcb4620ca3322",
                },
                {
                  type: i,
                  name: "dating",
                  title: "掘金相亲",
                  id: "5abcaa67092dcb4620ca335c",
                },
                {
                  type: i,
                  name: "slacking",
                  title: "上班摸鱼",
                  id: "5c106be9092dcb2cc5de7257",
                },
                {
                  type: i,
                  name: "app",
                  title: "应用安利",
                  id: "5b514af1092dcb61bd72800d",
                },
                {
                  type: i,
                  name: "tool",
                  title: "开发工具",
                  id: "5abb67d2092dcb4620ca3324",
                },
                {
                  type: i,
                  name: "news",
                  title: "New资讯",
                  id: "5c46a17f092dcb4737217152",
                },
              ],
              sortType: n,
            },
          },
          search: {
            search_result_from: d,
            query: e,
            list: [],
            linkList: [],
            loading: a,
            skeleton: a,
            actionType: {
              FETCH: "@\u002Fview\u002Fsearch\u002FFETCH",
              FETCH_MORE: "@\u002Fview\u002Fsearch\u002FFETCH_MORE",
              RESET: "@\u002Fview\u002Fsearch\u002FRESET",
            },
          },
          columnIndex: {
            list: {
              pageSize: g,
              page: h,
              total: d,
              pointer: b,
              lastPointer: b,
              list: [],
              loading: a,
              error: b,
              canPrev: c,
              canNext: c,
              linkList: [],
              lastFetchOnServer: a,
              actionType: {
                UPDATE:
                  "@\u002Fview\u002FcolumnIndex\u002Flist\u002FUPDATE",
                FETCH: "@\u002Fview\u002FcolumnIndex\u002Flist\u002FFETCH",
                FORCE_FETCH:
                  "@\u002Fview\u002FcolumnIndex\u002Flist\u002FFORCE_FETCH",
                FETCH_MORE:
                  "@\u002Fview\u002FcolumnIndex\u002Flist\u002FFETCH_MORE",
                RESET: "@\u002Fview\u002FcolumnIndex\u002Flist\u002FRESET",
              },
              sort: l,
              category: "all",
            },
            hotList: {
              pageSize: g,
              page: h,
              total: d,
              pointer: b,
              lastPointer: b,
              list: [],
              loading: a,
              error: b,
              canPrev: c,
              canNext: c,
              linkList: [],
              lastFetchOnServer: a,
              actionType: {
                UPDATE:
                  "@\u002Fview\u002FcolumnIndex\u002FhotList\u002FUPDATE",
                FETCH:
                  "@\u002Fview\u002FcolumnIndex\u002FhotList\u002FFETCH",
                FORCE_FETCH:
                  "@\u002Fview\u002FcolumnIndex\u002FhotList\u002FFORCE_FETCH",
                FETCH_MORE:
                  "@\u002Fview\u002FcolumnIndex\u002FhotList\u002FFETCH_MORE",
                RESET:
                  "@\u002Fview\u002FcolumnIndex\u002FhotList\u002FRESET",
              },
            },
          },
          timelineIndex: {
            tdkTemplates: [],
            categoryNavList: [],
            tagNavList: [],
            splitTagList: [],
            timelineAdList: [],
            list: [],
            sort: n,
            category: j,
            categoryId: e,
            tagId: e,
            tag: "全部",
            actionType: {
              FETCH_TIMELINE_LIST:
                "@\u002Fview\u002FtimelineIndex\u002FFETCH_TIMELINE_LIST",
              FETCH_CATEGORY_LIST:
                "@\u002Fview\u002FtimelineIndex\u002FFETCH_CATEGORY_LIST",
              FETCH_TAG_LIST:
                "@\u002Fview\u002FtimelineIndex\u002FFETCH_TAG_LIST",
              DELETE_ENTRY:
                "@\u002Fview\u002FtimelineIndex\u002FDELETE_ENTRY",
              FETCH_MORE: "@\u002Fview\u002FtimelineIndex\u002FFETCH_MORE",
              FETCH: "@\u002Fview\u002FtimelineIndex\u002FFETCH",
              RESET: "@\u002Fview\u002FtimelineIndex\u002FRESET",
            },
            serverRenderTimelineList: a,
            timelineList: {
              list: [],
              cursor: f,
              skeleton: a,
              loading: a,
              hasMore: a,
              categoryId: e,
              tagId: e,
              sort: e,
              actionType: {
                UPDATE_STATE: "timeline-list\u002FUPDATE_STATE",
                FETCH_MORE: "timeline-list\u002FFETCH_MORE",
                FETCH: "timeline-list\u002FFETCH",
                RESET: "timeline-list\u002FRESET",
              },
            },
            recommendList: {
              list: [],
              cursor: f,
              loading: a,
              hasMore: a,
              skeleton: c,
              actionType: {
                UPDATE_STATE: "recommend-list\u002FUPDATE_STATE",
                FETCH_MORE: "recommend-list\u002FFETCH_MORE",
                FETCH: "recommend-list\u002FFETCH",
                RESET: "recommend-list\u002FRESET",
              },
            },
            followingList: {
              list: [],
              cursor: f,
              skeleton: a,
              loading: a,
              hasMore: c,
              actionType: {
                UPDATE_STATE: "following-list\u002FUPDATE_STATE",
                FETCH_MORE: "following-list\u002FFETCH_MORE",
                FETCH: "following-list\u002FFETCH",
                RESET: "following-list\u002FRESET",
              },
            },
          },
          subscribe: {
            subscribed: {
              list: [],
              cursor: f,
              skeleton: c,
              loading: a,
              hasMore: a,
              actionType: {
                UPDATE_STATE:
                  "view\u002Fsubscribe\u002Fsubscribed\u002Flist\u002FUPDATE_STATE",
                FETCH_MORE:
                  "view\u002Fsubscribe\u002Fsubscribed\u002Flist\u002FFETCH_MORE",
                FETCH:
                  "view\u002Fsubscribe\u002Fsubscribed\u002Flist\u002FFETCH",
                RESET:
                  "view\u002Fsubscribe\u002Fsubscribed\u002Flist\u002FRESET",
              },
            },
            all: {
              list: [],
              cursor: f,
              loading: a,
              skeleton: c,
              hasMore: a,
              linkList: e,
              actionType: {
                UPDATE_STATE:
                  "view\u002Fsubscribe\u002Fall\u002Flist\u002FUPDATE_STATE",
                FETCH_MORE:
                  "view\u002Fsubscribe\u002Fall\u002Flist\u002FFETCH_MORE",
                FETCH: "view\u002Fsubscribe\u002Fall\u002Flist\u002FFETCH",
                RESET: "view\u002Fsubscribe\u002Fall\u002Flist\u002FRESET",
              },
            },
          },
          entryPublic: {
            entry: { user: {} },
            relatedEntryList: [],
            relatedCollectionList: [],
            actionType: {
              FETCH: "@\u002Fview\u002FentryPublic\u002FFETCH",
              RESET: "@\u002Fview\u002FentryPublic\u002FRESET",
            },
          },
          user: {
            user: {},
            serverRendered: a,
            actionType: {
              FETCH: "@\u002Fview\u002Fuser\u002FFETCH",
              RESET: "@\u002Fview\u002Fuser\u002FRESET",
              UPDATE: "@\u002Fview\u002Fuser\u002FUPDATE",
            },
            detailList: {
              actionType: {
                RESET: "@\u002Fview\u002Fuser\u002FdetailList\u002FRESET",
              },
              likeList: {
                list: [],
                cursor: f,
                hasMore: a,
                loading: a,
                skeleton: c,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FlikePostList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FlikePostList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FlikePostList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FlikePostList\u002FRESET",
                },
              },
              postList: {
                list: [],
                hasMore: a,
                skeleton: a,
                loading: a,
                sort: l,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpostList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpostList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpostList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpostList\u002FRESET",
                },
              },
              tagList: {
                list: [],
                loading: a,
                skeleton: c,
                hasMore: a,
                cursor: f,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FtagList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FtagList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FtagList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FtagList\u002FRESET",
                },
              },
              collectionList: {
                list: [],
                userId: e,
                skeleton: c,
                hasMore: a,
                cursor: f,
                type: "created",
                loading: a,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcollectionList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcollectionList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcollectionList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcollectionList\u002FRESET",
                },
              },
              followerList: {
                list: [],
                cursor: f,
                hasMore: a,
                loading: a,
                skeleton: a,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowerList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowerList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowerList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowerList\u002FRESET",
                },
              },
              followingList: {
                list: [],
                cursor: f,
                hasMore: a,
                skeleton: a,
                loading: a,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowingList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowingList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowingList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowingList\u002FRESET",
                },
              },
              followingTeamsList: {
                list: [],
                cursor: f,
                hasMore: a,
                skeleton: a,
                loading: a,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowingTeamsList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowingTeamsList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowingTeamsList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FfollowingTeamsList\u002FRESET",
                },
              },
              activityList: {
                list: [],
                cursor: f,
                hasMore: a,
                loading: a,
                skeleton: a,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FactivityList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FactivityList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FactivityList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FactivityList\u002FRESET",
                },
              },
              bookList: {
                list: [],
                cursor: f,
                skeleton: c,
                hasMore: a,
                loading: a,
                type: "bought",
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FbookList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FbookList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FbookList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FbookList\u002FRESET",
                },
              },
              pinList: {
                list: [],
                hasMore: a,
                loading: a,
                skeleton: c,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpinList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpinList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpinList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpinList\u002FRESET",
                },
              },
              courseList: {
                list: [],
                hasMore: a,
                loading: a,
                skeleton: c,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcourseList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcourseList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcourseList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcourseList\u002FRESET",
                },
              },
              pinPraisedList: {
                list: [],
                cursor: f,
                hasMore: a,
                loading: a,
                skeleton: c,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpinPraisedList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpinPraisedList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpinPraisedList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FpinPraisedList\u002FRESET",
                },
              },
              eventList: {
                list: [],
                cursor: f,
                hasMore: a,
                loading: a,
                skeleton: a,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FeventList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FeventList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FeventList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FeventList\u002FRESET",
                },
              },
              selfColumnList: {
                list: [],
                hasMore: a,
                skeleton: a,
                loading: a,
                cursor: f,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcolumnList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcolumnList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcolumnList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcolumnList\u002FRESET",
                },
              },
              columnFollowedList: {
                list: [],
                hasMore: a,
                skeleton: a,
                loading: a,
                cursor: f,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcolumnFollowedList\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcolumnFollowedList\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcolumnFollowedList\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcolumnFollowedList\u002FRESET",
                  FILTER:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002FcolumnFollowedList\u002FFILTER",
                },
              },
              realtimes: {
                list: [],
                cursor: f,
                hasMore: a,
                loading: a,
                skeleton: a,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimes\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimes\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimes\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimes\u002FRESET",
                  DELETE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimes\u002FDELETE",
                },
              },
              realtimeliked: {
                list: [],
                cursor: f,
                hasMore: a,
                loading: a,
                skeleton: a,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimeliked\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimeliked\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimeliked\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimeliked\u002FRESET",
                  DELETE:
                    "@\u002Fview\u002Fuser\u002FdetailList\u002Frealtimeliked\u002FDELETE",
                },
              },
            },
          },
          tag: {
            tag: {},
            actionType: {
              FETCH: "@\u002Fview\u002Ftag\u002FFETCH",
              FETCH_LIST: "@\u002Fview\u002Ftag\u002FFETCH_LIST",
              RESET: "@\u002Fview\u002Ftag\u002FRESET",
            },
            list: {
              list: [],
              cursor: f,
              loading: a,
              skeleton: a,
              hasMore: a,
              actionType: {
                UPDATE_STATE:
                  "@\u002Fview\u002Ftag\u002Flist\u002FUPDATE_STATE",
                FETCH_MORE:
                  "@\u002Fview\u002Ftag\u002Flist\u002FFETCH_MORE",
                FETCH: "@\u002Fview\u002Ftag\u002Flist\u002FFETCH",
                RESET: "@\u002Fview\u002Ftag\u002Flist\u002FRESET",
              },
            },
          },
          notification: {
            user: {
              actionType: {
                READ_ALL:
                  "@\u002Fview\u002Fnotification\u002Fuser\u002FREAD_ALL",
                RESET: "@\u002Fview\u002Fnotification\u002Fuser\u002FRESET",
              },
              listState: {
                list: [],
                cursor: f,
                hasMore: a,
                isLoading: a,
                messageType: 3,
                msgTotal: d,
                msgSubMap: { 1: d, 2: d, 3: d, 4: d },
              },
              list: {
                pageSize: g,
                page: h,
                total: d,
                pointer: b,
                lastPointer: b,
                list: [],
                loading: a,
                error: b,
                canPrev: c,
                canNext: c,
                linkList: [],
                lastFetchOnServer: a,
                actionType: {
                  UPDATE:
                    "@\u002Fview\u002Fnotification\u002Fuser\u002Flist\u002FUPDATE",
                  FETCH:
                    "@\u002Fview\u002Fnotification\u002Fuser\u002Flist\u002FFETCH",
                  FORCE_FETCH:
                    "@\u002Fview\u002Fnotification\u002Fuser\u002Flist\u002FFORCE_FETCH",
                  FETCH_MORE:
                    "@\u002Fview\u002Fnotification\u002Fuser\u002Flist\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fnotification\u002Fuser\u002Flist\u002FRESET",
                },
              },
            },
            system: {
              actionType: {
                READ_ALL:
                  "@\u002Fview\u002Fnotification\u002Fsystem\u002FREAD_ALL",
                RESET:
                  "@\u002Fview\u002Fnotification\u002Fsystem\u002FRESET",
              },
              list: {
                pageSize: g,
                page: h,
                total: d,
                pointer: b,
                lastPointer: b,
                list: [],
                loading: a,
                error: b,
                canPrev: c,
                canNext: c,
                linkList: [],
                lastFetchOnServer: a,
                actionType: {
                  UPDATE:
                    "@\u002Fview\u002Fnotification\u002Fsystem\u002Flist\u002FUPDATE",
                  FETCH:
                    "@\u002Fview\u002Fnotification\u002Fsystem\u002Flist\u002FFETCH",
                  FORCE_FETCH:
                    "@\u002Fview\u002Fnotification\u002Fsystem\u002Flist\u002FFORCE_FETCH",
                  FETCH_MORE:
                    "@\u002Fview\u002Fnotification\u002Fsystem\u002Flist\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fnotification\u002Fsystem\u002Flist\u002FRESET",
                },
              },
            },
          },
          column: {
            renderPost: a,
            serverRenderList: a,
            column: { id: p },
            entry: {
              id: p,
              screenshot: void 0,
              liked: a,
              article_id: p,
              article_info: {
                article_id: p,
                user_id: "1978776660216136",
                category_id: "6809637767543259144",
                tag_ids: [6809640407484334000, 6809640398105870000],
                visible_level: d,
                link_url: e,
                cover_image:
                  "https:\u002F\u002Fp9-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Ff2e03a2824d64a5faae38479a6e5e86f~tplv-k3u1fbpfcp-watermark.image",
                is_gfw: d,
                title: "完成人生的第一次代码贡献 - 新手村任务",
                brief_content:
                  "- 如何给开源团队提贡献 - 如何使用TDD进行测试 - 如何成为合格的代码贡献者 - 什么是测试驱动开发",
                is_english: d,
                is_original: h,
                user_index: d,
                original_type: d,
                original_author: e,
                content: e,
                ctime: "1627379490",
                mtime: "1628065250",
                rtime: "1627379855",
                draft_id: "6987995132444295198",
                view_count: 1798,
                collect_count: 22,
                digg_count: 18,
                comment_count: 6,
                hot_index: 113,
                is_hot: d,
                rank_index: 0.00384411,
                status: 2,
                verify_status: h,
                audit_status: 2,
                mark_content:
                  '「本文已参与好文召集令活动，点击查看：[后端、大前端双赛道投稿，2万元奖池等你挑战！](https:\u002F\u002Fjuejin.cn\u002Fpost\u002F6978685539985653767 "https:\u002F\u002Fjuejin.cn\u002Fpost\u002F6978685539985653767")」\n\n\n\n# 任务列表\n- 任务一:  做一个合格的代码贡献者\n    - 如何下载代码？\n    - 如何运行代码？\n    - 如何给天天造轮子提交代码贡献？\n- 任务二:  编写一个符合TDD标准的代码\n - 如何使用TDD(测试驱动方式)开发一个Helloworld？\n\n最近然叔的天天造轮子栏目得到了大家的欢迎，但是吃瓜的多，真正加进来的少呀，\n\n为了不做那种只看球，不踢球的中国球迷。\n\n![Snip20210723_12.png](https:\u002F\u002Fp9-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Ff332ab93a0f54e84b6e40d52e41b9ba5~tplv-k3u1fbpfcp-watermark.image)\n\n\n然叔特意给打大家带来了，天天造轮子新手村任务\n\n\n# 任务一：做一个合格的代码贡献者\n\n![Snip20210804_2.png](https:\u002F\u002Fp3-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Ffdc1441d4e344444bfa4fc068544253a~tplv-k3u1fbpfcp-watermark.image)\n\n## 下载和提交代码\n\n首先我们说说, 如何下载和提交代码 这个主要都是git相关操作。\n\n### fork代码\n登陆github \n\nhttps:\u002F\u002Fgithub.com\u002Fsu37josephxia\u002Fwheel-awesome\n\n\n![image.png](https:\u002F\u002Fp9-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F31c94336dec949ffbbaf23faa0085761~tplv-k3u1fbpfcp-watermark.image)\n\n\n![image.png](https:\u002F\u002Fp6-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F38d1fe31582b4909b5e12f62887f5079~tplv-k3u1fbpfcp-watermark.image)\n\n\n![image.png](https:\u002F\u002Fp6-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F7f35339fb6ad4c0f9420f55e9145d35d~tplv-k3u1fbpfcp-watermark.image)\n\n\n![image.png](https:\u002F\u002Fp1-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Fd6a0c65ab0aa4d838ec9242c5aa27efc~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https:\u002F\u002Fp9-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Fc52f6b3ceced4e779dc63891317cc608~tplv-k3u1fbpfcp-watermark.image)\n### clone代码\n然后你就可以在自己的github中下载你的代码了。\n\n\n注意 不是su37josephxia\u002Fwheel-awesome\n\n注意 不是su37josephxia\u002Fwheel-awesome\n\n注意 不是su37josephxia\u002Fwheel-awesome\n\n```\ngit clone git@github.com:youname\u002Fwheel-awesome.git\n```\n\n\n![image.png](https:\u002F\u002Fp9-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F440a1dace9cc4c2e8b5f8c9fad515958~tplv-k3u1fbpfcp-watermark.image)\n\n\n### 同步最新代码\n首先说一下为什么要这么做，这是因为在你开发的时候，其他人也在做，很有可能你fork的代码已经不是最新代码了 这时候你就需要不断更新你的代码 至少保证 push前 更新一次，这样才能确保不和主版本库代码冲突。\n\n首先 建立一个新的origin（源）\n#### 添加新远程分支\n\n这个只需要做一次\n\n```\ngit remote add upstream git@github.com:su37josephxia\u002Fwheel-awesome.git\n```\n\n#### 拉去合并远程分支到master分支\n\n这个需要随时做 保持你的master分支永远是官方最新成果。\n\n```\n# 抓取源仓库修改 master分支\ngit fetch upstream master\n# 切换分支\ngit checkout master\n# 合并远程分支\ngit merge upstream\u002Fmaster\n复制代码\n```\n\n![image.png](https:\u002F\u002Fp3-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F36b4d386d09e4f0daad4cfcd8b5bf2f0~tplv-k3u1fbpfcp-watermark.image)\n\n\n \n### 编写代码\n后面的章节我们会讲如何跟新代码 这里面我们就做一个基础的代码更新练习。\n大家可以作为练习把自己的名字更新到天才榜中。\n\n![image.png](https:\u002F\u002Fp3-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Fdc523ab8eaa242bdb8d8a603349120f0~tplv-k3u1fbpfcp-watermark.image)\n\n\n\n### commit代码\n\n```\ngit add .\ngit commit -am \'add ranshu to helloworld \'\n```\n\n![image.png](https:\u002F\u002Fp3-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F1a1975b31bbe407999c762103c3585e3~tplv-k3u1fbpfcp-watermark.image)\n### push代码\n```\ngit push\n```\n\n![image.png](https:\u002F\u002Fp3-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F55ef45d2b587489db012f3f51f840fb1~tplv-k3u1fbpfcp-watermark.image)\n\n\n## 提交PullRequest到造轮子项目\n\n![image.png](https:\u002F\u002Fp6-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Fe910d72a1b7a42ea8adad25582aaf405~tplv-k3u1fbpfcp-watermark.image)\n\n\n\n![image.png](https:\u002F\u002Fp1-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Fb9ed98daf360432e972225632a7f73cb~tplv-k3u1fbpfcp-watermark.image)\n\n\n\n![image.png](https:\u002F\u002Fp1-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F3e8b8773cbce4fc79e7a69ecb1026f14~tplv-k3u1fbpfcp-watermark.image)\n\n\n\n\n![image.png](https:\u002F\u002Fp9-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Ffd1b752bb2aa453a921469e4e66fd9e7~tplv-k3u1fbpfcp-watermark.image)\n\n\n后面就等然叔给你commit了 ，\n以下然叔我的动作，你那里没有 看看就行了\n\n\n![image.png](https:\u002F\u002Fp9-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Fcb1c0192fb704a3f9afbce0b89ecab1e~tplv-k3u1fbpfcp-watermark.image)\n\n\n# 任务二：编写一个符合TDD标准的代码\n开源代码，自动化测试试标配。主要用于回归测试。\n比如你提交了一行代码，代码管理者需要在最短时间分析出他对以前功能的影响。最有效的方法就是跑一遍原来已经编写好的测试用例。\n\n反过来你的代码也一定要由自动化测试case才可以。\n\n\n## 运行和测试代码\n\n安装依赖\n\n![image.png](https:\u002F\u002Fp9-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F3164d7b513a94fce8fb9d1b1cddaa9f1~tplv-k3u1fbpfcp-watermark.image)\n\n运行测试用例\n\n\n![image.png](https:\u002F\u002Fp9-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F4f22cb0183ad4ab68340d959cd19ab6f~tplv-k3u1fbpfcp-watermark.image)\n\n\n## 编写Helloworld代码\n```js\nmodule.exports = (callback) =\u003E {\n    callback && callback(\'hi\')\n    return \'hello world\'\n}\n```\n\n## 编写测试用例\n\n```js\ndescribe("Helloworld", () =\u003E {\n  test("返回参数正确", () =\u003E {\n    const hello = require("..\u002Findex");\n\n    const fn = jest.fn();\n    hello();\n    expect(hello(fn)).toBe("hello world");\n  });\n\n  test("回调函数被正确调用", () =\u003E {\n    const hello = require("..\u002Findex");\n\n    const fn = jest.fn();\n    hello(fn);\n\n    const calls = fn.mock.calls;\n    expect(calls.length).toBe(1);\n    expect(calls[0][0]).toBe("hi");\n  });\n});\n\n```\n\n\n![image.png](https:\u002F\u002Fp3-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002Fbacf8050e0214708ae19a78f3a185e5f~tplv-k3u1fbpfcp-watermark.image)\n\n\n\n## 往期文章\n\n[【Vue3官方教程】🎄万字笔记 | 同步导学视频](https:\u002F\u002Fjuejin.cn\u002Fpost\u002F6909247394904702984)\n\n[[Vue官方教程笔记]- 尤雨溪手写mini-vue](https:\u002F\u002Fjuejin.cn\u002Fpost\u002F6911897255087702030)\n\n[如何参加开源项目-如何给Vue3.0提PR](https:\u002F\u002Fjuejin.cn\u002Fpost\u002F6844904191744278542)\n\n[做了一夜动画，让大家十分钟搞懂Webpack](https:\u002F\u002Fjuejin.cn\u002Fpost\u002F6961961165656326152)\n\n',
                display_count: d,
              },
              author_user_info: {
                user_id: "1978776660216136",
                user_name: "全栈然叔",
                company: "@花果山",
                job_title: e,
                avatar_large:
                  "https:\u002F\u002Fp3-passport.byteacctimg.com\u002Fimg\u002Fuser-avatar\u002F406cea3f24e05b9522a65c9b9cf124c2~300x300.image",
                level: 5,
                description: "刻意学习者、IT老兵",
                followee_count: 64,
                follower_count: 7192,
                post_article_count: 50,
                digg_article_count: 408,
                got_digg_count: 7760,
                got_view_count: 364172,
                post_shortmsg_count: 39,
                digg_shortmsg_count: 9,
                isfollowed: a,
                favorable_author: h,
                power: 11413,
                study_point: d,
                university: { university_id: f, name: e, logo: e },
                major: { major_id: f, parent_id: f, name: e },
                student_status: d,
                select_event_count: d,
                select_online_course_count: d,
                identity: d,
                is_select_annual: a,
                select_annual_rank: d,
                annual_list_type: d,
                extraMap: {},
                is_logout: d,
              },
              category: {
                category_id: "6809637767543259144",
                category_name: "前端",
                category_url: "frontend",
                rank: 2,
                back_ground:
                  "https:\u002F\u002Flc-mhke0kuv.cn-n1.lcfile.com\u002F8c95587526f346c0.png",
                icon: "https:\u002F\u002Flc-mhke0kuv.cn-n1.lcfile.com\u002F1c40f5eaba561e32.png",
                ctime: 1457483942,
                mtime: 1432503190,
                show_type: 3,
                item_type: 2,
                promote_tag_cap: 4,
                promote_priority: 2,
                id: "6809637767543259144",
                name: "前端",
                title: "前端",
                alias: "frontend",
              },
              tags: [
                {
                  entriesCount: void 0,
                  subscribed: a,
                  id: "6809640407484334093",
                  tag_id: "6809640407484334093",
                  tag_name: "前端",
                  color: "#60ADFF",
                  icon: "https:\u002F\u002Fp1-jj.byteimg.com\u002Ftos-cn-i-t2oaga2asx\u002Fleancloud-assets\u002Fbac28828a49181c34110.png~tplv-t2oaga2asx-image.image",
                  back_ground: e,
                  show_navi: h,
                  ctime: 1435971546,
                  mtime: 1637226180,
                  id_type: 9,
                  tag_alias: e,
                  post_article_count: 106298,
                  concern_user_count: 535387,
                  title: "前端",
                  tagId: "6809640407484334093",
                  articleCount: 106298,
                  subscribersCount: 535387,
                  createdAt: b,
                  updatedAt: b,
                },
                {
                  entriesCount: void 0,
                  subscribed: a,
                  id: "6809640398105870343",
                  tag_id: "6809640398105870343",
                  tag_name: "JavaScript",
                  color: "#616161",
                  icon: "https:\u002F\u002Fp1-jj.byteimg.com\u002Ftos-cn-i-t2oaga2asx\u002Fleancloud-assets\u002F5d70fd6af940df373834.png~tplv-t2oaga2asx-image.image",
                  back_ground: e,
                  show_navi: d,
                  ctime: 1435884803,
                  mtime: 1637226180,
                  id_type: 9,
                  tag_alias: e,
                  post_article_count: 72862,
                  concern_user_count: 406364,
                  title: "JavaScript",
                  tagId: "6809640398105870343",
                  articleCount: 72862,
                  subscribersCount: 406364,
                  createdAt: b,
                  updatedAt: b,
                },
              ],
              user_interact: {
                id: 6989541212105982000,
                omitempty: 2,
                user_id: d,
                is_digg: a,
                is_follow: a,
                is_collect: a,
              },
              org: { org_info: b, org_user: b, is_followed: a },
              req_id: "202111181707020102020421691F07977C",
              status: { push_status: d },
              title: "完成人生的第一次代码贡献 - 新手村任务",
              user: {
                id: "1978776660216136",
                self_description: void 0,
                followed: a,
                viewerIsFollowing: void 0,
                community: void 0,
                subscribedTagCount: d,
                wroteBookCount: d,
                boughtBookCount: d,
                isBindedPhone: a,
                level: 5,
                user_id: "1978776660216136",
                user_name: "全栈然叔",
                company: "@花果山",
                job_title: e,
                avatar_large:
                  "https:\u002F\u002Fp3-passport.byteacctimg.com\u002Fimg\u002Fuser-avatar\u002F406cea3f24e05b9522a65c9b9cf124c2~300x300.image",
                description: "刻意学习者、IT老兵",
                followee_count: 64,
                follower_count: 7192,
                post_article_count: 50,
                digg_article_count: 408,
                got_digg_count: 7760,
                got_view_count: 364172,
                post_shortmsg_count: 39,
                digg_shortmsg_count: 9,
                isfollowed: a,
                favorable_author: h,
                power: 11413,
                study_point: d,
                university: { university_id: f, name: e, logo: e },
                major: { major_id: f, parent_id: f, name: e },
                student_status: d,
                select_event_count: d,
                select_online_course_count: d,
                identity: d,
                is_select_annual: a,
                select_annual_rank: d,
                annual_list_type: d,
                extraMap: {},
                is_logout: d,
                juejinPower: 11413,
                jobTitle: e,
                roles: {
                  isBookAuthor: a,
                  isFavorableAuthor: c,
                  isCobuilder: a,
                  isAdmin: a,
                },
                username: "全栈然叔",
                blogAddress: void 0,
                selfDescription: "刻意学习者、IT老兵",
                beLikedCount: 7760,
                beReadCount: 364172,
                followerCount: 7192,
                followingCount: 64,
                collectionCount: d,
                createdCollectionCount: d,
                followingCollectionCount: d,
                postedPostsCount: 50,
                pinCount: 39,
                likedArticleCount: 408,
                likedPinCount: 9,
                avatar:
                  "https:\u002F\u002Fp3-passport.byteacctimg.com\u002Fimg\u002Fuser-avatar\u002F406cea3f24e05b9522a65c9b9cf124c2~300x300.image",
                latestLoginedInAt: b,
                createdAt: b,
                updatedAt: b,
                phoneNumber: e,
                titleDescription: e,
                followeesCount: 64,
                applyEventCount: d,
                need_lead: d,
                followTopicCnt: void 0,
              },
              viewCount: void 0,
              commentsCount: 6,
              isEvent: void 0,
              abstract:
                "- 如何给开源团队提贡献 - 如何使用TDD进行测试 - 如何成为合格的代码贡献者 - 什么是测试驱动开发",
              latestCommentAt: b,
              createdAt: new Date(1627379490000),
              updatedAt: b,
              isTopicEvent: a,
              likedCount: 18,
              likeCount: 18,
              content: e,
              originalUrl: e,
              type: "post",
              collected: a,
              viewsCount: 1798,
              username: "全栈然叔",
              viewerHasLiked: a,
              draftId: "6987995132444295198",
              collectionCount: 22,
            },
            entryView: {},
            author: {
              id: "1978776660216136",
              self_description: void 0,
              followed: a,
              viewerIsFollowing: void 0,
              community: void 0,
              subscribedTagCount: d,
              wroteBookCount: d,
              boughtBookCount: d,
              isBindedPhone: a,
              level: 5,
              user_id: "1978776660216136",
              user_name: "全栈然叔",
              company: "@花果山",
              job_title: e,
              avatar_large:
                "https:\u002F\u002Fp3-passport.byteacctimg.com\u002Fimg\u002Fuser-avatar\u002F406cea3f24e05b9522a65c9b9cf124c2~300x300.image",
              description: "刻意学习者、IT老兵",
              followee_count: 64,
              follower_count: 7192,
              post_article_count: 50,
              digg_article_count: 408,
              got_digg_count: 7760,
              got_view_count: 364172,
              post_shortmsg_count: 39,
              digg_shortmsg_count: 9,
              isfollowed: a,
              favorable_author: h,
              power: 11413,
              study_point: d,
              university: { university_id: f, name: e, logo: e },
              major: { major_id: f, parent_id: f, name: e },
              student_status: d,
              select_event_count: d,
              select_online_course_count: d,
              identity: d,
              is_select_annual: a,
              select_annual_rank: d,
              annual_list_type: d,
              extraMap: {},
              is_logout: d,
              juejinPower: 11413,
              jobTitle: e,
              roles: {
                isBookAuthor: a,
                isFavorableAuthor: c,
                isCobuilder: a,
                isAdmin: a,
              },
              username: "全栈然叔",
              blogAddress: void 0,
              selfDescription: "刻意学习者、IT老兵",
              beLikedCount: 7760,
              beReadCount: 364172,
              followerCount: 7192,
              followingCount: 64,
              collectionCount: d,
              createdCollectionCount: d,
              followingCollectionCount: d,
              postedPostsCount: 50,
              pinCount: 39,
              likedArticleCount: 408,
              likedPinCount: 9,
              avatar:
                "https:\u002F\u002Fp3-passport.byteacctimg.com\u002Fimg\u002Fuser-avatar\u002F406cea3f24e05b9522a65c9b9cf124c2~300x300.image",
              latestLoginedInAt: b,
              createdAt: b,
              updatedAt: b,
              phoneNumber: e,
              titleDescription: e,
              followeesCount: 64,
              applyEventCount: d,
              need_lead: d,
              followTopicCnt: void 0,
            },
            adEntryList: [],
            relatedEntryList: [],
            cachedHtml: e,
            actionType: {
              FETCH: "view\u002Fcolumn\u002FFETCH",
              FETCH_ADDITIONAL: "view\u002Fcolumn\u002FFETCH_ADDITIONAL",
              FETCH_SIDEBAR_ADENTRY:
                "view\u002Fcolumn\u002FFETCH_SIDEBAR_ADENTRY",
              RESET: "view\u002Fcolumn\u002FRESET",
            },
            recommendedArticleList: {
              list: [],
              cursor: f,
              loading: a,
              skeleton: a,
              hasMore: a,
              articleId: e,
              actionType: {
                UPDATE_STATE:
                  "view\u002Fcolumn\u002Frecommend-List\u002FUPDATE_STATE",
                FETCH_MORE:
                  "view\u002Fcolumn\u002Frecommend-List\u002FFETCH_MORE",
                FETCH: "view\u002Fcolumn\u002Frecommend-List\u002FFETCH",
                RESET: "view\u002Fcolumn\u002Frecommend-List\u002FRESET",
              },
            },
          },
          collection: {
            collection: { author: {} },
            actionType: {
              FETCH: "@\u002Fview\u002Fcollection\u002FFETCH",
              REFRESH: "@\u002Fview\u002Fcollection\u002FREFRESH",
              RESET: "@\u002Fview\u002Fcollection\u002FRESET",
            },
            list: {
              pageSize: g,
              page: h,
              total: d,
              pointer: b,
              lastPointer: b,
              list: [],
              loading: a,
              error: b,
              canPrev: c,
              canNext: c,
              linkList: [],
              lastFetchOnServer: a,
              actionType: {
                UPDATE: "@\u002Fview\u002Fcollection\u002Flist\u002FUPDATE",
                FETCH: "@\u002Fview\u002Fcollection\u002Flist\u002FFETCH",
                FORCE_FETCH:
                  "@\u002Fview\u002Fcollection\u002Flist\u002FFORCE_FETCH",
                FETCH_MORE:
                  "@\u002Fview\u002Fcollection\u002Flist\u002FFETCH_MORE",
                RESET: "@\u002Fview\u002Fcollection\u002Flist\u002FRESET",
              },
              id: e,
              sort: l,
            },
          },
          gettingStarted: {
            category: {},
            actionType: {
              UPDATE_STATE:
                "@\u002Fview\u002FgettingStarted\u002FUPDATE_STATE",
              FOLLOW: "@\u002Fview\u002FgettingStarted\u002FFOLLOW",
              RESET: "@\u002Fview\u002FgettingStarted\u002FRESET",
              UPDATE_CATEGORY:
                "@\u002Fview\u002FgettingStarted\u002FUPDATE_CATEGORY",
            },
          },
          pin: {
            pin: { user: {}, imageUrlList: [] },
            pinList: [],
            actionType: {
              FETCH: "@\u002Fview\u002Fpin\u002FFETCH",
              RESET: "@\u002Fview\u002Fpin\u002FRESET",
            },
            sidebar: {
              list: [],
              after: e,
              loading: a,
              isRecommend: a,
              hasNextPage: c,
              actionType: {
                UPDATE_STATE:
                  "@\u002Fview\u002Fpin\u002Fsidebar\u002FUPDATE_STATE",
                FETCH_MORE:
                  "@\u002Fview\u002Fpin\u002Fsidebar\u002FFETCH_MORE",
                FETCH: "@\u002Fview\u002Fpin\u002Fsidebar\u002FFETCH",
                RESET: "@\u002Fview\u002Fpin\u002Fsidebar\u002FRESET",
              },
            },
            commentList: {
              pageSize: g,
              page: h,
              total: d,
              pointer: b,
              lastPointer: b,
              list: [],
              loading: a,
              error: b,
              canPrev: c,
              canNext: c,
              linkList: [],
              lastFetchOnServer: a,
              actionType: {
                UPDATE: "@\u002Fview\u002Fpin\u002FcommentList\u002FUPDATE",
                FETCH: "@\u002Fview\u002Fpin\u002FcommentList\u002FFETCH",
                FORCE_FETCH:
                  "@\u002Fview\u002Fpin\u002FcommentList\u002FFORCE_FETCH",
                FETCH_MORE:
                  "@\u002Fview\u002Fpin\u002FcommentList\u002FFETCH_MORE",
                RESET: "@\u002Fview\u002Fpin\u002FcommentList\u002FRESET",
              },
              pinId: b,
            },
            subCommentList: {
              pageSize: g,
              page: h,
              total: d,
              pointer: b,
              lastPointer: b,
              list: [],
              loading: a,
              error: b,
              canPrev: c,
              canNext: c,
              linkList: [],
              lastFetchOnServer: a,
              actionType: {
                UPDATE:
                  "@\u002Fview\u002Fpin\u002FsubCommentList\u002FUPDATE",
                FETCH:
                  "@\u002Fview\u002Fpin\u002FsubCommentList\u002FFETCH",
                FORCE_FETCH:
                  "@\u002Fview\u002Fpin\u002FsubCommentList\u002FFORCE_FETCH",
                FETCH_MORE:
                  "@\u002Fview\u002Fpin\u002FsubCommentList\u002FFETCH_MORE",
                RESET:
                  "@\u002Fview\u002Fpin\u002FsubCommentList\u002FRESET",
              },
              commentId: b,
            },
          },
          topic: {
            topic: e,
            followedTopicList: [],
            actionType: {
              FETCH: "@\u002Fview\u002Ftopic\u002FFETCH",
              UPDATE_STATE: "@\u002Fview\u002Ftopic\u002FUPDATE_STATE",
              RESET: "@\u002Fview\u002Ftopic\u002FRESET",
            },
            allTopicList: {
              pageSize: q,
              page: d,
              total: d,
              pointer: b,
              lastPointer: b,
              list: [],
              loading: a,
              error: b,
              canPrev: c,
              canNext: c,
              linkList: [],
              lastFetchOnServer: a,
              actionType: {
                UPDATE:
                  "@\u002Fview\u002Ftopic\u002FallTopicList\u002FUPDATE",
                FETCH:
                  "@\u002Fview\u002Ftopic\u002FallTopicList\u002FFETCH",
                FORCE_FETCH:
                  "@\u002Fview\u002Ftopic\u002FallTopicList\u002FFORCE_FETCH",
                FETCH_MORE:
                  "@\u002Fview\u002Ftopic\u002FallTopicList\u002FFETCH_MORE",
                RESET:
                  "@\u002Fview\u002Ftopic\u002FallTopicList\u002FRESET",
              },
              sortType: k,
            },
            pinlist: {
              pageSize: g,
              page: h,
              total: d,
              pointer: b,
              lastPointer: b,
              list: [],
              loading: a,
              error: b,
              canPrev: c,
              canNext: c,
              linkList: [],
              lastFetchOnServer: a,
              actionType: {
                UPDATE: "@\u002Fview\u002Ftopic\u002FpinList\u002FUPDATE",
                FETCH: "@\u002Fview\u002Ftopic\u002FpinList\u002FFETCH",
                FORCE_FETCH:
                  "@\u002Fview\u002Ftopic\u002FpinList\u002FFORCE_FETCH",
                FETCH_MORE:
                  "@\u002Fview\u002Ftopic\u002FpinList\u002FFETCH_MORE",
                RESET: "@\u002Fview\u002Ftopic\u002FpinList\u002FRESET",
              },
              sortType: n,
            },
            sidebar: {
              actionType: {
                RESET: "@\u002Fview\u002Ftopic\u002Fsidebar\u002FRESET",
                UPDATE_STATE:
                  "@\u002Fview\u002Ftopic\u002Fsidebar\u002FUPDATE_STATE",
              },
              attender: {
                pageSize: g,
                page: h,
                total: d,
                pointer: b,
                lastPointer: b,
                list: [],
                loading: a,
                error: b,
                canPrev: c,
                canNext: c,
                linkList: [],
                lastFetchOnServer: a,
                actionType: {
                  UPDATE:
                    "@\u002Fview\u002Ftopic\u002Fsidebar\u002Fattender\u002FUPDATE",
                  FETCH:
                    "@\u002Fview\u002Ftopic\u002Fsidebar\u002Fattender\u002FFETCH",
                  FORCE_FETCH:
                    "@\u002Fview\u002Ftopic\u002Fsidebar\u002Fattender\u002FFORCE_FETCH",
                  FETCH_MORE:
                    "@\u002Fview\u002Ftopic\u002Fsidebar\u002Fattender\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Ftopic\u002Fsidebar\u002Fattender\u002FRESET",
                },
                topicId: b,
              },
            },
            followedList: {
              pageSize: q,
              page: d,
              total: d,
              pointer: b,
              lastPointer: b,
              list: [],
              loading: a,
              error: b,
              canPrev: c,
              canNext: c,
              linkList: [],
              lastFetchOnServer: a,
              actionType: {
                UPDATE:
                  "@\u002Fview\u002Ftopic\u002FfollowedList\u002FUPDATE",
                FETCH:
                  "@\u002Fview\u002Ftopic\u002FfollowedList\u002FFETCH",
                FORCE_FETCH:
                  "@\u002Fview\u002Ftopic\u002FfollowedList\u002FFORCE_FETCH",
                FETCH_MORE:
                  "@\u002Fview\u002Ftopic\u002FfollowedList\u002FFETCH_MORE",
                RESET:
                  "@\u002Fview\u002Ftopic\u002FfollowedList\u002FRESET",
              },
              after: d,
            },
          },
          recommendationIndex: {
            actionType: {
              FETCH_USER: "@\u002Fview\u002Frecommendation\u002FFETCH_USER",
              FETCH_MORE: "@\u002Fview\u002Frecommendation\u002FFETCH_MORE",
              RESET: "@\u002Fview\u002Frecommendation\u002FRESET",
              FETCH: "@\u002Fview\u002Frecommendation\u002FFETCH",
            },
            cursor: e,
            hasMore: e,
            userList: [],
            loading: a,
            skeleton: c,
            category: j,
            categoryNavList: [],
            serverRenderUserList: a,
          },
          event: {
            event: {},
            loading: a,
            user: {},
            actionType: {
              FETCH: "view\u002Fevent\u002FFETCH",
              RESET: "view\u002Fevent\u002FRESET",
            },
          },
          academyIndex: {
            academy: {},
            bannerList: [],
            qualitiedList: [],
            latestList: [],
            offlineList: [],
            loading: a,
            user: {},
            actionType: {
              FETCH: "view\u002Facademy\u002FFETCH",
              RESET: "view\u002Facademy\u002FRESET",
            },
          },
          coursesIndex: {
            loading: a,
            list: [],
            sort: "online",
            actionType: {
              FETCH: "view\u002Fcourses\u002FFETCH",
              RESET: "view\u002Fcourses\u002FRESET",
              FETCH_MORE: "view\u002Fcourses\u002FFETCH_MORE",
            },
          },
          team: {
            team: {},
            loading: c,
            actionType: {
              FETCH: "@\u002Fview\u002Fteam\u002FFETCH",
              RESET: "@\u002Fview\u002Fteam\u002FRESET",
              UPDATE: "@\u002Fview\u002Fteam\u002FUPDATE",
              FOLLOW: "@\u002Fview\u002Fteam\u002FFOLLOW",
            },
            detailList: {
              actionType: {
                RESET: "@\u002Fview\u002Fteam\u002FdetailList\u002FRESET",
              },
              posts: {
                list: [],
                hasMore: a,
                skeleton: a,
                loading: a,
                sort: l,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fposts\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fposts\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fposts\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fposts\u002FRESET",
                },
              },
              pins: {
                list: [],
                hasMore: a,
                loading: a,
                skeleton: c,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fpins\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fpins\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fpins\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fpins\u002FRESET",
                },
              },
              hire: {
                list: [],
                hasMore: a,
                cursor: f,
                loading: a,
                skeleton: c,
                actionType: {
                  FETCH:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fhire\u002FFETCH",
                  UPDATE_STATE:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fhire\u002FUPDATE_STATE",
                  FETCH_MORE:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fhire\u002FFETCH_MORE",
                  RESET:
                    "@\u002Fview\u002Fteam\u002FdetailList\u002Fhire\u002FRESET",
                },
              },
            },
          },
        },
        component: {
          indexAside: {
            bannerList: [],
            userList: [],
            actionType: {
              FETCH_BANNER: "@\u002Fcomponent\u002Faside\u002FFETCH_BANNER",
              FETCH_USER: "@\u002Fcomponent\u002Faside\u002FFETCH_USER",
              CLOSE_BANNER: "@\u002Fcomponent\u002Faside\u002FCLOSE_BANNER",
            },
          },
        },
        env: { ua: void 0 },
        auth: { user: b, clientId: e, token: e },
        tag: { subscribedTagList: [] },
        entry: { isLikeLoading: a },
        collection: {},
        comment: {},
        bookComment: {},
        repoComment: {},
        category: { list: [] },
        user: { subscribedTagList: [] },
        notification: { unreadCount: { user: d, system: d, total: d } },
        follow: { subscribedTagList: [] },
        error: { location: b, errorView: b, statusCode: 200 },
        abTest: { info: {} },
        suspensionPanel: { needSuspension: c },
        pinComment: {},
        pin: {
          deleteDialogVisible: a,
          reportDialogVisible: a,
          targetPin: b,
          isOnFocus: a,
        },
        topic: { visible: a },
        activity: { 2020: {}, offer: { is_show: d, start_time: d } },
        header: { leadStep: d, isPopupZlink: a },
        route: {
          name: "column",
          path: o,
          hash: e,
          query: {},
          params: { id: p },
          fullPath: o,
          meta: {},
          from: {
            name: b,
            path: r,
            hash: e,
            query: {},
            params: {},
            fullPath: r,
            meta: {},
          },
        },
      },
      serverRendered: c,
      routePath: o,
      config: {
        API_HOST: "api.juejin.cn",
        CAPTCHA_HOST: "verify.snssdk.com",
        PLATFORM_APPID: {
          wechat: 1277,
          weibo: 1276,
          github: 1045,
          wechatApp: 1070,
        },
        http: {},
      },
      globalRefs: {},
    };
  })(
    false,
    null,
    true,
    0,
    "",
    "0",
    20,
    1,
    "topic",
    "recommended",
    "hot",
    "newest",
    "following",
    "popular",
    "\u002Fpost\u002F6989541212105981966",
    "6989541212105981966",
    100,
    "\u002F"
  );