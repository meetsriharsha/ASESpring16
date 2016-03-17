/**
 * Created by meets on 3/15/2016.
 */
describe('DashCtrl', function() {
    var $rootScope, scope, $controller, ctrl, $httpBackend, state;
    beforeEach(angular.mock.module('starter'));

    //angular.module('starter').run(function ($httpBackend) {
    //    $httpBackend.whenGET(/.*/).passThrough();
    //});
    //beforeEach(angular.mock.inject(function (_$httpBackend_) {
    //    $httpBackend = _$httpBackend_;;
    //}));
        beforeEach(inject(function ($rootScope, $controller, _$httpBackend_, $state) {
            scope = $rootScope.$new();
           // $rootScope.$digest();
           // state = $state;
            ctrl = $controller('DashCtrl', {$scope: scope});
            //$httpBackend = _$httpBackend_;
            //$httpBackend.whenGET(/.*/).passThrough();
          //  $httpBackend.whenGET(/templates\/.*/).respond('');

        }));



        it('Validates user sso input', function() {
            var sso = "SC9V9";
            var password = "password";
            expect(scope).toBeDefined();
           //
            // state.expectTransitionTo('tab.account')
            scope.doLogin(sso,password);
           // $httpBackend.flush();
           expect(scope.username).toEqual('SC9V9');

        });

    it('Validates SSO String length', function() {
        var sso = "SC9V9sdfs";
        var password = "password";
        expect(scope).toBeDefined();
        //
        // state.expectTransitionTo('tab.account')
        scope.doLogin(sso,password);
        // $httpBackend.flush();
        expect(scope.username.length).not.toBeGreaterThan(5);

    });

    it('Validates user password', function() {
        var sso = "SC9V";
        var password = "password";
        expect(scope).toBeDefined();
        //
        // state.expectTransitionTo('tab.account')
        scope.doLogin(sso,password);
        // $httpBackend.flush();
        expect(scope.pwd).not.toMatch(/(\!|\@|\#|\$|\ |\%|\(|\))/);

    });

});