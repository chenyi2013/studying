//
//  ViewController.h
//  WebViewTest02
//
//  Created by 王驰 on 15/2/4.
//  Copyright (c) 2015年 Walker. All rights reserved.
//

#import <UIKit/UIKit.h>


@interface ViewController : UIViewController<UIWebViewDelegate, UITableViewDelegate>{
    IBOutlet UIWebView *webView;

    UIActivityIndicatorView *activityIndicatorView;
    
    UIView *opaqueview;
    
    UITableView *tableView;
}

@end