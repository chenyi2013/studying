$(function () {
	/*
	* commentBox
	* ========================
	*/
	var commentBox = $(".comment-box");
	var cb_title = commentBox.find(".c-title");
	cb_title.initVal = "请输入标题";
	var cb_cont = commentBox.find(".c-cont");
	cb_cont.initVal = "请输入话题内容";
	cb_cont.endVal = "";

	cb_title.focus(function () {
		var _this = this;
		forbidUnloginUserSendTopic(cbTitleFocus(_this));
/*		this.initVal = cb_title.initVal;
		cb_setValEmpty(this);
		$(this).parent().removeClass("has-error");*/
	}).blur(function () {
		cb_setValInit(this);
	});
	function cbTitleFocus (obj) {
		obj.initVal = cb_title.initVal;
		cb_setValEmpty(obj);
		$(obj).parent().removeClass("has-error");			
	}

	cb_cont.focus(function () {
		var _this = this;
		forbidUnloginUserSendTopic(cbContFocus(_this));
/*		this.initVal = cb_cont.initVal;
		cb_setValEmpty(this);
		$(this).parent().removeClass("has-error");*/
	}).blur(function () {
		cb_setValInit(this);
	});
	function cbContFocus (obj) {
		obj.initVal = cb_cont.initVal;
		cb_setValEmpty(obj);
		$(obj).parent().removeClass("has-error");				
	}


	/*
	* 发表话题
	* ========================
	*/
	function cmtBtnSmtClick () {
		if ( cb_title.val() == "" || cb_title.val() == cb_title.initVal ) {
			$(".j-c-title").addClass("has-error");
			$(".j-c-title").find(".error-info").text("标题不能为空！");
		} else if ( cb_title.val().length < 5 ) {
			$(".j-c-title").addClass("has-error");
			$(".j-c-title").find(".error-info").text("标题太短！长度请控制在5-20之间！");			
		} else if ( cb_title.val().length > 20 ) {
			$(".j-c-title").addClass("has-error");
			$(".j-c-title").find(".error-info").text("标题太长！长度请控制在5-20之间！");			
		} else if ( cb_cont.val() == "" || cb_cont.val() == cb_cont.initVal ) {
			$(".j-c-cont").addClass("has-error");
			$(".j-c-cont").find(".error-info").text("内容不能为空！");
		} else if ( cb_cont.val().length < 30 ) {
			$(".j-c-cont").addClass("has-error");
			$(".j-c-cont").find(".error-info").text("内容不能少于30个字！");			
		} else {
			//console.log(cb_cont.val().replace(/\n/g, "[br/]"));
			$(".comment-box .btn-submit").text("处理中...").css({
				"backgroundColor": "#ccc",
				"cursor": "default"
			}).unbind("click");
			$(".cmt-form input[name='pid']").val($(".item-intro .btn-addCart").eq(0).attr("id"));
			$.post("/topic/newtopic/", $(".cmt-form").serialize(), function ( msg ) {
				var msg_topic = $.parseJSON(msg.topic);
				//console.log(msg);
				if (msg.status == "0") {
					$(".item-details .topic-list").append('<li style="display:none;" data-id="'+msg.topicid+'"><div class="topic-list-zan"><a href="javascript:;" class="btn btn-zan"><i class="ico ico-zan"></i><span class="text">0</span></a></div> <div class="topic-list-cont"> <h3 class="t-title"><a class="j-topic-list-title" href="/topic/'+msg_topic.productid+'/'+msg.topicid+'/">'+msg_topic.title+'</a></h3> <div class="t-meta"> <span class="t-date fr">刚刚</span> <span class="t-reply fr"><span class="t-reply-num">0</span>回应</span> <span class="t-author fr"> <span class="aut-name">'+$(".header-userInfo .username-text").text()+'</span> </span> </div></div></li>');
					$(".topic-list li:last-child").slideDown("400");
					$(".topic-list li:last-child").fadeIn("400");

					cb_title.val(cb_title.initVal);
					cb_cont.val(cb_cont.initVal);
					$(".comment-box .btn-submit").text("发送").css({
						"backgroundColor":"#ff4f2f",
						"cursor": "pointer"
					}).bind("click", function () {
						cmtBtnSmtClick();
					});
					
					//btnTopicLikeClick();

					ManagerDelPost();
			
					clearRobSofa();

				} else if (msg.status == "1000" ) {
					console.log("发话题太频繁！");
				} else {
					console.log("ERROR!");
				}
			});
		}
	}

	$(".comment-box .btn-submit").click(function () {
		forbidUnloginUserSendTopic(cmtBtnSmtClick);
	});

	//登录判断
	function forbidUnloginUserSendTopic ( fn ) {
		if ( $(".header-userInfo .username-text").text().length !=0 ) {
			if ( fn ) {
				fn();
			}
		} else {
			$(".pageLayer").show();
			$(".signin-fixed").show();
		}		
	}

	function cb_setValEmpty (ele) {
		if (ele.value == ele.initVal || ele.value == "") {
			ele.value = "";
		}				
	}
	function cb_setValInit (ele) {
		if (ele.value == ele.initVal || ele.value == "") {
			ele.value = ele.initVal;
		}				
	}



	var fixedCmt = $('.fixed-cmt');
	fixedCmt.find('.ipt-lik').focus(function () {
		$(this).parent().removeClass('has-error');
	});
	fixedCmt.find('.ipt-txt').focus(function () {
		$(this).parent().removeClass('has-error');
	});
	/*
	* comment picture upload
	* [img]http://www.xx.com/ssss/123.jpg[/img]
	* ========================
	*/
	var fixedCmtPic = $('.fixed-cmt-pic');
	fixedCmtPic.find('.ipt-fil').change(function () {
		//console.log('文件域改变了');
		var b = 1;
		$('.form-cmt-pic-upd').submit();
		$('#upd-iframe').load(function () {
			if ( b == 1 ) {
				var msg = $.parseJSON( $(document.getElementById('upd-iframe').contentWindow.document.body).text() );
				//console.log(msg);
				//console.log( $(document.getElementById('upd-iframe').contentWindow.document.body).text() );
				if ( msg.status == "0" ) {
					//console.log( msg.url );
					// $('.fixed-cmt-pic .ipt-fil-w').insertBefore('<li><img src="'+msg.url+'" /><span class="li-lay"><a class="del" href="javascript:;">X</a></span></li>');		
					$('<li><img src="'+msg.url+'" /><span class="li-lay"><a class="del" href="javascript:;">X</a></span></li>').insertBefore('.fixed-cmt-pic .ipt-fil-w');
				}
			}
			b = 2;
		});
	});
	fixedCmtPic.find('.btn-smt').click(function () {
		var tmp_str = '';
		$('.fixed-cmt-pic .p-lis img').each(function () {
			console.log($(this).attr('src'))
			tmp_str += '<img src="'+$(this).attr('src')+'"/>';
		});
		cb_cont.val( cb_cont.val() + tmp_str );
		fixed_cmt_hide();
	});




	/*
	* comment video
	* [video]http://www.xx.com/ssss/aaa.avi[/video]
	* ========================
	*/
	var fixedCmtVdo = $('.fixed-cmt-vdo');
	fixedCmtVdo.find('.btn-smt').click(function () {
		if ( $('.j-vdo-ipt-lik').val() == '' ) {
			$('.j-vdo-ipt-lik').parent().addClass('has-error').find('.tips').text('链接不能为空');
		} else {
			cb_cont.val( cb_cont.val() + '<iframe src="'+$('.j-vdo-ipt-lik').val()+'"></iframe>' );
			fixed_cmt_hide();
		}
	});



	/*
	* comment link
	* [a]http://www.xx.com/[/a]
	* ========================
	*/
	var fixedCmtLik = $('.fixed-cmt-lik'),
		reUrl = /[a-zA-z]+:\/\/[^\s]*/;
	fixedCmtLik.find('.btn-smt').click(function () {
		if ( $('.j-lik-ipt-lik').val() == '' ) {
			$('.j-lik-ipt-lik').parent().addClass('has-error').find('.tips').text('链接不能为空');
		} else if ( !reUrl.test($('.j-lik-ipt-lik').val()) ) {
			$('.j-lik-ipt-lik').parent().addClass('has-error').find('.tips').text('链接不合法');
		} else if ( $('.j-lik-ipt-txt').val() == '' ) {
			$('.j-lik-ipt-txt').parent().addClass('has-error').find('.tips').text('文本不能为空');
		} else {
			cb_cont.val( cb_cont.val() + '<a href="'+$('.j-lik-ipt-lik').val()+'" target="_blank">'+$('.j-lik-ipt-txt').val()+'</a>' );
			fixed_cmt_hide();
		}
	});





	var replyBox = $(".tdc-reply-box");
	var rb_cont = replyBox.find(".textarea"); 
	rb_cont.initVal = "我要回复";

	rb_cont.focus(function () {
		var _this = this;
		forbidUnloginUserSendTopic(rbContFocus(_this));
	}).blur(function () {
		cb_setValInit(this);
	});
	function rbContFocus (obj) {
		obj.initVal = rb_cont.initVal;
		cb_setValEmpty(obj);
		$(obj).parent().removeClass("has-error");
	}


	/*
	* 回复评论
	* ========================
	*/
	function replayBoxBtnSmtClick (tid, action) {
		if ( rb_cont.val() == "" || rb_cont.val() == rb_cont.initVal ) {
			$(".j-reply-cont").addClass("has-error");
			$(".j-reply-cont").find(".error-info").text("内容不能为空！");
		} else if ( rb_cont.val().length < 3 ) {
			$(".j-reply-cont").addClass("has-error");
			$(".j-reply-cont").find(".error-info").text("至少回复两个字！");			
		} else {
			$(".tdc-reply-box .btn-submit").text("处理中...").css({
				"backgroundColor": "#ccc",
				"cursor": "default"
			}).unbind("click");
			//ar tid = $(".topic-detail-cont").attr("data-id");
			$.post("/topic/"+tid+"/", {
				"csrfmiddlewaretoken": $("input[name='csrfmiddlewaretoken']").val(),
				"tid": tid,
				"action": action,
				"content": $(".tdc-reply-box .textarea").val().replace(tmp_atSB_str, ""),
				"order_num": ""
			}, function ( msg ) {
				//console.log( msg );
				if ( msg.status = "0" ) {
					var msg_cmt = $.parseJSON(msg.comment);
					var cur_uname = $(".header-userInfo .username-text").text();
					if ( msg.ancestors_num > 1) {
						$(".comment-list").append('<li class="j-comment-list-li" style="display:none;" data-id="'+msg_cmt._id.$oid+'"> <div class="list-photo"> <img class="photo" src="/static/images/temp/default-photo.jpg" alt="" /> </div> <div class="list-cont"> <div class="lc-quote"><a class="lcq-user" href="#">'+tmp_ancestor_name+'</a><span class="lcq-text">'+tmp_ancestor_cont+'</span></div> <div class="lc-meta1 topic-commonmeta"> <span class="name fl"><a href="#" class="j-cmt-name">'+cur_uname+'</a></span> <span class="date fr">刚刚</span> </div> <div class="lc-text j-cmt-cont">'+msg_cmt.content+'</div> <div class="lc-meta2"> <span class="complain fl"><a href="#">举报</a></span> <span class="tools fr tools-active"> <span class="btn-reply fr"><a class="j-btn-reply" data-u="'+cur_uname+'" data-id="'+msg_cmt._id.$oid+'" href="javascript:;">回复</a></span> <span class="line fr">|</span> <span class="zan-btn fr"><a href="javascript:;">赞</a></span> <span class="zan-num fr">'+msg_cmt.votes+'</span> </span> </div> </div> </li>');
					} else {
						$(".comment-list").append('<li class="j-comment-list-li" style="display:none;" data-id="'+msg_cmt._id.$oid+'"> <div class="list-photo"> <img class="photo" src="/static/images/temp/default-photo.jpg" alt="" /> </div> <div class="list-cont"> <div class="lc-meta1 topic-commonmeta"> <span class="name fl"><a href="#" class="j-cmt-name">'+cur_uname+'</a></span> <span class="date fr">刚刚</span> </div> <div class="lc-text j-cmt-cont">'+msg_cmt.content+'</div> <div class="lc-meta2"> <span class="complain fl"><a href="#">举报</a></span> <span class="tools fr tools-active"> <span class="btn-reply fr"><a class="j-btn-reply" data-u="'+cur_uname+'" data-id="'+msg_cmt._id.$oid+'" href="javascript:;">回复</a></span> <span class="line fr">|</span> <span class="zan-btn fr"><a href="javascript:;">赞</a></span> <span class="zan-num fr">'+msg_cmt.votes+'</span> </span> </div> </div> </li>');
					}
					$(".comment-list li:last-child").slideDown("400");
					$(".comment-list li:last-child").fadeIn("400");

					rb_cont.val(rb_cont.initVal);
					$(".tdc-reply-box .btn-submit").attr("data-id", $(".topic-detail-cont").attr("data-id"));
					$(".tdc-reply-box .btn-celReply").remove();

					$(".tdc-reply-box .btn-submit").text("发送").css({
						"backgroundColor": "#ff4f2f",
						"cursor": "pointer"
					}).bind("click", function () {
						replayBoxBtnSmtClick($(this).attr("data-id"), "comment");
					});

					clearRobSofa();

					replyEachCmt();
					ManagerDelPost();
					//btnCommentLikeClick();

				} else if ( msg.status = "1231") {
					alert("别太猛了");
				} else {
					console.log("ERROR!");
				}
			}, "json");
		}
	}

	$(".tdc-reply-box .btn-submit").bind("click", function () {
		var _this = this;
		forbidUnloginUserSendTopic(function () {
			replayBoxBtnSmtClick($(_this).attr("data-id"), "comment");
		});
	});


	/*
	* 清除强沙发信息
	* ========================
	*/
	function clearRobSofa () {
		if ( $(".tpc-cmt-more .no-list").length !=0 ) {
			$(".tpc-cmt-more").slideUp("400", function () {
				$(this).remove();
			});
		}
	}

	
	/*
	* 回复每一条评论滚动及@设置
	* ========================
	*/
	var tmp_ancestor_name, tmp_ancestor_cont, tmp_atSB_str;
	function replyEachCmt () {
		$(".comment-list .j-btn-reply").each(function (i) {
			var _i = i;
			$(this).bind("click", function () {
				var _this = this;
				forbidUnloginUserSendTopic(function () {
					scrollToReplyBox();
					tmp_ancestor_name = $(".comment-list .j-cmt-name").eq(_i).text();	
					tmp_ancestor_cont = $(".comment-list .j-cmt-cont").eq(_i).text().substring(0, 30) + "...";	
					$(".tdc-reply-box .btn-submit").attr("data-id", $(_this).attr("data-id"));
					//replayBoxBtnSmtClick($(this).attr("data-id"));
					tmp_atSB_str = "[@"+$(_this).attr("data-u")+"]";
					$(".tdc-reply-box .textarea").val(tmp_atSB_str);
					if ($(".tdc-reply-box .btn-celReply").length == 0 ) {
						$(".tdc-reply-box .reply-btns").append('<a class="btn btn-celReply" href="javascript:;">取消回复</a>');
					}
					celReplyComment();
				});
			});
		});
	}
	replyEachCmt();


	//取消回复评论
	function celReplyComment () {
		$(".tdc-reply-box .btn-celReply").click(function () {
			rb_cont.val(rb_cont.initVal);
			$(".tdc-reply-box .btn-submit").attr("data-id", $(".topic-detail-cont").attr("data-id"));
			$(".tdc-reply-box .btn-celReply").remove();
		});
	}


	/*
	* 页面滚动到话题框
	* ========================
	*/
	function scrollToTopicBox () {
		$('html, body').animate({'scrollTop': $('.comment-box').offset().top - 150}, 400);		
	}
	$('.j-sendTpc-fast').click(function () {
		scrollToTopicBox();
	});


	/*
	* 页面滚动到评论框
	* ========================
	*/
	function scrollToReplyBox () {
		$('html, body').animate({'scrollTop': $('.tdc-reply-box').offset().top - 150}, 400);		
	}
	$('.j-sendCmt-fast').click(function () {
		scrollToReplyBox();
	});



	/*
	* ROOT delete topic 管理员删贴
	* ========================
	*/
	function ManagerDelPost () {
		if ( $(".header-userInfo .username-text").attr('data-id') == "1" ) {
			$(".item-details .topic-list li, .item-details .comment-list li").hover(function () {
				var _this = this;
				$(this).css({
					'position': 'relative'
				}).append('<span class="tpc-cmt-li-del" style="position: absolute; right: 0; bottom: 0; padding: 1px 5px; font-size: 14px; background-color: #f00; color: #fff; cursor: pointer;">删除</span>');
				$(this).find('.tpc-cmt-li-del').click(function () {
					if ( confirm('确定要删除吗？') ) {
						$.post('/topic/'+$(this).parent().attr('data-id')+'/', {
							'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
							'action': 'delete'
						}, function ( msg ) {
							if ( msg.status == '0' ) {
								$(_this).slideUp('400', function () {
									$(this).remove();
								});
							} else {
								alert('ERROR!');
							}
						}, 'json');
					}
				});
			}, function () {
				$(this).css({
					'position': ''
				}).find('.tpc-cmt-li-del').remove();
			});
		}
	}
	ManagerDelPost();


	/*
	* topic list morePages 话题列表异步分页
	* ========================
	*/
	$('.j-more-tpc-list .btn-more').click(function () {
		var _this = this, pNum = $(_this).attr('data-id');
		$.get('.', {
			'page': pNum
		}, function ( msg ) {
			//console.log( msg );
			if ( msg.status == '0' ) {
				if ( msg.nextPage < 0 ) {
					$(_this).text('没有更多了').unbind('click').css({
						'color': '#ccc'
					});
				} else {
					$('.item-details .topic-list').append(msg.html);
					$(_this).attr('data-id', msg.nextPage);
					replyEachCmt();
					ManagerDelPost();
					btnTopicLikeClick();
				}
			}
		});
	});


	/*
	* comment list morePages 评论列表异步分页
	* ========================
	*/
	$('.j-more-cmt-list .btn-more').click(function () {
		var _this = this, pNum = $(_this).attr('data-id');
		$.get('.', {
			'page': pNum
		}, function ( msg ) {
			console.log( msg );
			if ( msg.status == '0' ) {
				if ( msg.nextPage < 0 ) {
					$(_this).text('没有更多了').unbind('click').css({
						'color': '#ccc'
					});
				}
				$('.item-details .comment-list').append(msg.html);
				$(_this).attr('data-id', msg.nextPage);
				replyEachCmt();
				ManagerDelPost();
				btnCommentLikeClick();
			}
		});
	});


	/*
	* 话题点赞
	* ========================
	*/
	function btnTopicLikeClick () {
		$('.j-btn-tpc-like').each(function () {
			$(this).click(function () {
				var _this = this, tmp_tid = $(this).parent().parent().attr('data-id');
				//console.log(tmp_tid);
				forbidUnloginUserSendTopic(function () {
					$.post('/topic/'+tmp_tid+'/', {
						'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
						'tid': tmp_tid,
						'action': 'heart'			
					}, function ( msg ) {
						//console.log( msg );
						if ( msg.status == '0' ) {
							$(_this).unbind('click').addClass('btn-zan-active').removeClass('j-btn-tpc-like').find('.text').text( msg.votes );
						} else if ( msg.status == '1' ) {
							alert(msg.error);
						}
					});
				});
			});
		});
	}
	btnTopicLikeClick();



	/*
	* 评论点赞
	* ========================
	*/
	function btnCommentLikeClick () {
		$('.j-btn-cmt-like').each(function () {
			$(this).click(function () {
				var _this = this, tmp_tid = $(this).attr('data-id');
				forbidUnloginUserSendTopic(function () {
					$.post('/topic/'+tmp_tid+'/', {
						'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
						'tid': tmp_tid,
						'action': 'heart'
					}, function ( msg ) {
						//console.log( msg );
						if ( msg.status == '0' ) {
							$(_this).unbind('click').removeClass('j-btn-cmt-like').parent().parent().find('.zan-num').text( msg.votes );
							$(_this).parent().parent().addClass('tools-active');
						} else if ( msg.status == '1' ) {
							alert(msg.error);
						}
					});
				});
			});
		});
	}
	btnCommentLikeClick();


	/*
	* commentBox Layer 评论框弹层
	* ========================
	*/
	commentBox.find(".btn-pic").click(function () {
		forbidUnloginUserSendTopic(function () {
			fixed_cmt_show($(".fixed-cmt-pic"));			
		});
	});
	commentBox.find(".btn-link").click(function () {
		forbidUnloginUserSendTopic(function () {
			fixed_cmt_show($(".fixed-cmt-lik"));			
		});
	});
	commentBox.find(".btn-video").click(function () {
		forbidUnloginUserSendTopic(function () {
			fixed_cmt_show($(".fixed-cmt-vdo"));			
		});
	});
	$(".fixed-cmt .close, .fixed-cmt .btn-cel").click(function () {
		fixed_cmt_hide();
	});

	function fixed_cmt_show (obj) {
		$(".pageLayer").show();
		obj.css({
			"top": "-300px"
		}).show().animate({"top": "50%"}, 300);
	}

	function fixed_cmt_hide () {
		$(".pageLayer").hide();
		$(".fixed-cmt").hide();				
	}


});